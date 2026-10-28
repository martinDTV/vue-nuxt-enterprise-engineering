<script setup lang="ts">
/** Ejemplo didáctico Nuxt: adaptar estructura de API/versión y autorización reales.
 * Evitar PII en URLs: q solo para búsquedas administrativas no sensibles.
 */
interface PatientRow { id: string; display_name: string }
interface PatientPage { items: PatientRow[]; total: number; page: number; page_size: number }
const route = useRoute()
const router = useRouter()
const page = computed(() => {
  const raw = Number(route.query.page ?? 1)
  return Number.isSafeInteger(raw) && raw > 0 ? raw : 1
})
const pageSize = 25
// El servidor debe resolver tenant desde sesión; no confiar en un id elegido por el cliente.
const query = computed(() => ({ page: page.value, page_size: pageSize }))
const { data, status, error, refresh } = await useFetch<PatientPage>('/api/patients', {
  query,
  // Nuxt debe crear clave reactiva propia según versión; comprobar comportamiento real.
  default: () => ({ items: [], page: 1, page_size: pageSize, total: 0 }),
})
async function goToPage(next: number) {
  if (!Number.isSafeInteger(next) || next < 1) return
  await router.push({ query: { ...route.query, page: String(next) } })
}
</script>
<template>
  <section aria-labelledby="patients-heading">
    <h1 id="patients-heading">Pacientes</h1>
    <p v-if="status === 'pending'" role="status">Cargando pacientes…</p>
    <div v-else-if="error" role="alert">
      No fue posible cargar la lista.
      <button type="button" @click="refresh()">Reintentar</button>
    </div>
    <p v-else-if="!data?.items.length">No hay pacientes que mostrar.</p>
    <template v-else>
      <table>
        <thead><tr><th scope="col">Paciente</th></tr></thead>
        <tbody><tr v-for="patient in data.items" :key="patient.id"><td>{{ patient.display_name }}</td></tr></tbody>
      </table>
      <nav aria-label="Paginación de pacientes">
        <button :disabled="page <= 1" type="button" @click="goToPage(page - 1)">Anterior</button>
        <span>Página {{ page }} de {{ Math.max(1, Math.ceil((data?.total ?? 0) / pageSize)) }}</span>
        <button :disabled="page >= Math.ceil((data?.total ?? 0) / pageSize)" type="button" @click="goToPage(page + 1)">Siguiente</button>
      </nav>
    </template>
  </section>
</template>

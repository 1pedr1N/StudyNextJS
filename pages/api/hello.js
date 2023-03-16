
export default async function handler(req, res) {
  // force revalidate
  await res.unstable_revalidate(`/`)
  return res.status(200).json({ name: 'John Doe' })
}

export default function (message) {
  const time = new Date(Date.now())
  const m = time.getMinutes()
  const s = time.getSeconds()
  const ms = time.getMilliseconds()

  console.log(`${m}:${s}.${ms} ${message}`)
}

/*! node-domexception. MIT License. Jimmy Wärting <https://jimmy.warting.se/opensource> */

const DOMException = globalThis.DOMException ??= (() => {
  try { atob(0) } catch (err) { return err.constructor }
})()

export {
  DOMException,
  DOMException as default
}

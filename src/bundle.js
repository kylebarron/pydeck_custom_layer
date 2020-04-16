/* global window, global */
import { LabeledGeoJsonLayer } from "./labeled-geojson-layer"
const customLayerLibrary = {
  LabeledGeoJsonLayer,
}

const _global = typeof window === "undefined" ? global : window
_global.customLayerLibrary = customLayerLibrary

export default customLayerLibrary

//import react into the bundle
import React from 'react'
import {createRoot} from 'react-dom/client'

import Layout from './RouterFile.js'

//
const root = createRoot(document.querySelector("#app"))

//render your react application
root.render(<Layout/>)


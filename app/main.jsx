import React from 'react'
import {render} from 'react-dom'
import { Router, Route, Link } from 'react-router'

import TreeNav from './components/treeNav.jsx'

const wrap = document.querySelector('.wrapper')

render((<TreeNav />),wrap)




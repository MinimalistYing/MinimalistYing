import React from 'react'
import { NavLink } from 'react-router-dom'
import { withRouter } from 'react-router'

import './style.less'

const iconStyle = {
	width: 15,
	marginRight: 5,
	position: 'relative',
	top: 2
}

const github = <svg style={iconStyle} viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="621"><path d="M512 42.666667A464.64 464.64 0 0 0 42.666667 502.186667 460.373333 460.373333 0 0 0 363.52 938.666667c23.466667 4.266667 32-9.813333 32-22.186667v-78.08c-130.56 27.733333-158.293333-61.44-158.293333-61.44a122.026667 122.026667 0 0 0-52.053334-67.413333c-42.666667-28.16 3.413333-27.733333 3.413334-27.733334a98.56 98.56 0 0 1 71.68 47.36 101.12 101.12 0 0 0 136.533333 37.973334 99.413333 99.413333 0 0 1 29.866667-61.44c-104.106667-11.52-213.333333-50.773333-213.333334-226.986667a177.066667 177.066667 0 0 1 47.36-124.16 161.28 161.28 0 0 1 4.693334-121.173333s39.68-12.373333 128 46.933333a455.68 455.68 0 0 1 234.666666 0c89.6-59.306667 128-46.933333 128-46.933333a161.28 161.28 0 0 1 4.693334 121.173333A177.066667 177.066667 0 0 1 810.666667 477.866667c0 176.64-110.08 215.466667-213.333334 226.986666a106.666667 106.666667 0 0 1 32 85.333334v125.866666c0 14.933333 8.533333 26.88 32 22.186667A460.8 460.8 0 0 0 981.333333 502.186667 464.64 464.64 0 0 0 512 42.666667" fill="#231F20" p-id="622"></path></svg>

const stackoverflow = <svg style={iconStyle} viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="5111"><path d="M620.714667 895.829333L213.376 896 213.333333 808.832l407.338667-0.213333 0.042667 87.210666zM896 402.133333L826.325333 0l-85.76 14.933333 69.674667 402.090667 85.76-14.933333z m-265.472 294.698667l-405.632-37.418667-7.978667 86.826667 405.632 37.376 7.978667-86.784z m26.752-113.749333l-393.386667-105.941334-22.613333 84.181334 393.429333 105.984 22.613334-84.224z m51.370667-99.712L357.76 276.053333 313.6 351.146667l350.890667 207.36 44.202666-75.093334z m86.016-61.013334l-229.504-337.237333-71.893334 49.066667 229.546667 337.237333 71.850667-49.066667z" fill="#FF810F" p-id="5112"></path><path d="M697.770667 597.333333v357.973334h-541.866667V597.333333H85.333333v426.666667h682.666667V597.333333z" fill="#BEBCBC" p-id="5113"></path></svg>

const leetcode = <svg style={iconStyle} viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="7717"><path d="M1023.522548 511.96634c0 163.697987 0 327.395973 0.477452 491.093959 0 17.051874-3.887827 20.939701-20.939701 20.871494q-491.09396-0.81849-982.187919 0c-17.051874 0-20.939701-3.81962-20.871493-20.871494q0.81849-491.09396 0-982.187919C-0.067321 3.820506 3.820506-0.067321 20.87238 0.000887q491.09396 0.81849 982.187919 0c17.051874 0 21.007908 3.81962 20.939701 20.871493-0.477452 163.697987-0.477452 327.395973-0.477452 491.09396z" fill="#FEFEFE" p-id="7718"></path><path d="M454.876667 321.735638c-61.386745 61.386745-124.819715 121.068303-184.774103 184.160235-44.403079 46.722134-40.924497 113.906516 5.593015 161.924591 55.179863 56.680428 111.996706 111.723876 168.063266 167.449399 21.212531 21.962813 20.939701 47.063171 5.388392 70.390134-14.391781 21.485361-35.058652 34.649407-63.091932 22.576681a132.663577 132.663577 0 0 1-35.67252-25.577811c-51.769488-52.315148-104.766711-103.470769-155.990539-156.399784-89.897478-92.8304-90.92059-232.451141-0.477453-324.667673C320.985355 291.72434 449.965727 163.903496 578.400439 35.536991c28.30611-28.30611 63.842215-30.147713 87.032763-6.002259s21.007908 55.657315-6.411504 84.509085q-43.175344 45.426191-86.691726 90.443138c-30.693372 47.608831-71.822492 84.645501-117.453305 117.248683z" fill="#070706" p-id="7719"></path><path d="M677.028476 641.014919H493.413901c-40.924497 0-70.185512-24.75932-69.503437-58.112785 0.613867-32.262145 27.965073-55.998353 68.207495-56.134768q187.02495-0.886697 374.049899 0c39.833177 0 62.34165 22.031021 62.682687 56.475805 0 35.740727-23.054133 57.294295-64.933534 57.70354-62.137027 0.54566-124.546885 0.068207-186.888535 0.068208z" fill="#B4B2B1" p-id="7720"></path><path d="M386.055305 928.100263c60.568255-7.366409 79.052486-37.241292 57.70354-92.966815 63.842215 33.48988 110.837178 26.055263 162.470252-25.57781 26.464508-26.464508 52.519771-53.338261 79.598146-79.188901s57.43071-26.464508 81.439748-2.7283 23.531586 54.565996-1.978017 81.439748c-34.103747 35.195067-67.457212 70.594757-103.470769 103.266147-76.938054 69.776267-199.916166 75.914941-275.7629 15.755931z" fill="#EAA240" p-id="7721"></path><path d="M454.876667 321.735638a1295.942393 1295.942393 0 0 1 117.453305-117.248683c89.692855 27.828658 142.349041 101.151714 202.371636 164.925721 19.575551 20.871493 11.663482 53.747506-10.776784 72.777397a53.338261 53.338261 0 0 1-73.868717-2.18264 821.627477 821.627477 0 0 1-74.414376-74.277961c-44.130249-52.315148-96.854642-66.502307-160.765064-43.993834z" fill="#EAA340" p-id="7722"></path></svg>

const codesandbox = <svg style={iconStyle} viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2035"><path d="M709.6 210l0.4-0.2h0.2L512 96 313.9 209.8h-0.2l0.7 0.3L151.5 304v416L512 928l360.5-208V304l-162.9-94zM482.7 843.6L339.6 761V621.4L210 547.8V372.9l272.7 157.3v313.4zM238.2 321.5l134.7-77.8 138.9 79.7 139.1-79.9 135.2 78-273.9 158-274-158zM814 548.3l-128.8 73.1v139.1l-143.9 83V530.4L814 373.1v175.2z" p-id="2036"></path></svg>

const codewars = <svg style={iconStyle} viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1047"><path d="M32.426667 520.533333l-3.413334-1.706666c-7.68-4.266667-13.653333-10.666667-17.92-18.773334-5.973333-11.093333-8.533333-21.333333-8.533333-32l0.853333-5.546666c0-8.533333 2.133333-16.213333 5.973334-23.466667l3.413333-6.4c1.706667-3.413333 4.266667-6.4 6.4-9.386667 2.56-2.986667 2.986667-6.826667 2.133333-10.24l-2.133333-6.826666c-2.56-8.533333-4.266667-17.066667-4.266667-25.6L13.653333 375.466667c0-9.386667 2.56-18.773333 8.533334-25.6l4.266666-5.546667c2.986667-4.266667 7.68-6.826667 12.8-8.533333 4.266667-1.28 7.253333-5.546667 7.68-10.666667l0.853334-14.506667c0-11.52 5.546667-22.186667 14.08-29.866666l10.24-7.68c2.133333-2.133333 4.266667-4.266667 5.973333-7.68 2.133333-2.56 2.56-5.973333 2.133333-8.533334-0.853333-4.266667 0-5.546667 2.133334-5.973333 6.826667 2.56 11.093333 1.706667 14.08-1.706667l5.546666-7.253333 15.36-17.066667a17.066667 17.066667 0 0 0 3.413334-17.92l-5.12-11.093333c-0.853333-2.56 0-5.546667 2.133333-6.4 5.546667 0 9.386667 2.133333 11.093333 5.546667l1.706667 2.986666c2.56 5.12 8.533333 7.68 12.8 5.546667 9.386667-3.413333 17.066667-4.266667 24.32-4.266667h13.653333c9.386667 0 17.066667-6.4 18.773334-16.213333 1.706667-11.946667 5.973333-21.333333 11.946666-27.733333 6.4-7.253333 13.653333-12.8 22.186667-17.066667 11.093333-5.973333 17.92-14.506667 20.053333-25.6 2.986667-13.653333 10.24-23.466667 20.053334-29.866667l32.426666-18.346666 9.386667-5.546667c5.546667-3.413333 10.666667-7.68 14.933333-12.8l8.533334-10.24c4.266667-4.266667 8.533333-7.253333 13.653333-8.533333 4.266667-1.28 10.24-2.133333 15.36-1.706667l17.066667 1.28c8.533333 0 15.36 2.133333 22.186666 5.12l4.266667 2.133333c4.266667 1.706667 8.533333 0.853333 10.666667-2.133333L426.666667 29.866667l18.346666-19.2c4.266667-4.266667 9.386667-5.973333 14.933334-5.12 5.546667 0.853333 11.093333 2.986667 16.213333 5.546666 7.68 4.266667 14.08 5.973333 21.333333 5.973334h4.266667c9.386667 0 18.773333 1.28 28.16 3.413333l6.4 1.706667c6.4 1.706667 12.8-0.853333 17.066667-5.973334 1.28-2.133333 4.266667-2.56 5.973333-0.853333 1.28 0.853333 1.706667 1.706667 2.133333 2.986667 0.853333 8.533333 5.973333 14.933333 12.8 17.066666l6.826667 2.133334a34.133333 34.133333 0 0 1 17.92 12.8c4.266667 6.4 9.386667 12.8 15.36 17.066666l4.266667 4.266667c4.266667 4.266667 10.24 5.973333 16.213333 5.546667h25.173333c10.24 0 20.053333 1.706667 29.866667 5.973333 9.386667 4.266667 19.2 5.12 28.16 1.706667 9.386667-2.986667 19.2-4.266667 29.013333-2.986667l18.346667 2.986667c8.533333 0.853333 17.066667 5.12 22.186667 11.52l2.133333 2.133333c4.266667 4.266667 8.533333 9.813333 12.8 15.786667 2.56 5.546667 8.533333 8.533333 14.506667 8.533333h26.453333c6.4 0 12.8 1.28 17.92 4.266667 5.546667 4.266667 10.24 8.533333 14.506667 12.8l4.266666 5.546666c5.12 5.973333 7.68 14.08 7.253334 22.613334 0 6.826667 5.12 12.8 11.946666 12.8l8.533334 0.853333c5.973333 0 11.093333 4.266667 14.08 9.813333l4.266666 8.533334 11.093334 24.746666c1.706667 4.266667 2.133333 8.533333 1.706666 11.946667 0 4.266667 1.28 7.68 4.266667 9.386667l4.266667 2.986666c5.546667 4.266667 8.533333 10.666667 7.68 17.92l-2.986667 20.053334-0.853333 8.533333c-0.853333 4.266667 1.28 9.813333 5.12 12.8 6.4 4.266667 9.386667 9.813333 9.813333 16.213333v8.533334c0 4.266667-0.853333 9.386667-4.266667 12.8-2.56 3.413333-4.266667 7.68-4.266666 12.8l1.28 9.813333c0 6.826667 4.266667 12.8 8.533333 17.066667 5.973333 4.266667 9.386667 11.093333 10.24 17.92 1.706667 10.666667 2.133333 19.2 2.133333 27.733333v9.813333c0 3.413333 0 6.826667 1.28 10.24 0.853333 2.986667 2.986667 5.973333 5.546667 7.68l8.533333 6.4c8.533333 5.546667 14.506667 12.8 17.92 22.613334 4.266667 9.386667 5.546667 19.2 5.546667 29.013333v3.413333c0 7.68-0.853333 15.786667-3.413333 23.04a30.293333 30.293333 0 0 0 1.28 21.333334c3.413333 5.973333 5.546667 12.8 6.4 20.053333 1.706667 8.533333 0.853333 17.066667-2.133334 23.893333l-0.853333 2.986667c-2.133333 5.12-5.546667 9.813333-9.813333 13.653333-4.266667 4.266667-8.533333 6.826667-11.093334 9.813334-2.56 2.56-4.266667 6.826667-2.986666 10.666666l1.28 5.973334c2.133333 8.533333 2.133333 17.066667 0 24.746666v3.413334c-1.706667 6.4-4.266667 11.946667-6.826667 17.066666-2.986667 5.546667-7.253333 9.813333-12.8 12.8l-6.4 4.266667a11.093333 11.093333 0 0 0-5.12 9.386667c0 4.266667-1.706667 8.533333-4.266667 11.093333l-6.4 8.533333c-4.266667 5.546667-9.813333 10.24-15.786666 12.8-5.973333 4.266667-11.093333 8.533333-14.933334 12.8-4.266667 5.12-7.68 11.093333-9.386666 17.066667-1.706667 7.68-7.68 11.946667-14.08 11.946667h-23.04c-5.973333 0-11.52 4.266667-14.08 9.386666-2.986667 6.826667-5.973333 11.52-9.813334 15.786667a34.133333 34.133333 0 0 0-8.533333 15.36c-0.853333 5.12-5.12 8.533333-9.386667 6.826667-5.546667-2.56-11.093333 0-13.653333 4.266666-5.12 8.533333-10.24 14.933333-15.786667 20.48l-2.986666 2.56c-5.546667 4.266667-12.8 7.68-19.2 7.68-7.68 0-11.52 3.413333-12.8 8.533334-1.28 4.266667-2.133333 9.813333-2.56 14.506666-0.853333 5.12-2.56 9.813333-4.266667 14.08l-2.133333 2.56c-4.266667 6.4-7.68 12.8-11.946667 18.346667l-1.706667 2.56c-5.546667 7.253333-12.8 12.8-21.333333 14.933333a85.333333 85.333333 0 0 1-28.16 4.266667h-5.973333c-4.266667 0-8.533333 2.56-11.52 6.826667l-2.56 4.266666-2.56 5.12-5.546667 9.386667c-4.266667 7.68-10.666667 12.8-19.2 15.36-8.533333 2.133333-18.346667 2.986667-27.306667 2.56l-6.826666-0.853333c-5.973333 0-11.52-1.706667-17.066667-4.266667-4.266667-1.706667-10.24 0-12.8 4.266667-4.266667 5.973333-9.386667 9.386667-14.933333 11.093333l-12.8 4.266667c-8.533333 2.133333-17.92 2.133333-26.88 0l-6.826667-2.133334c-4.266667 0-8.533333-2.133333-11.946667-4.266666a23.04 23.04 0 0 0-12.8-2.56l-5.546666 0.853333c-8.533333 0.853333-16.213333 0-23.893334-2.133333l-11.52-2.56a24.32 24.32 0 0 1-12.8-9.813334 16.768 16.768 0 0 0-12.8-8.533333H422.4c-8.533333-1.28-16.213333-4.266667-21.333333-10.666667L384 960l-5.973333-5.12-9.386667-6.826667-5.546667-4.266666c-6.4-4.266667-14.08-7.68-22.186666-8.533334l-25.6-4.266666c-2.56 0-4.266667-0.853333-6.826667-1.28L298.666667 927.573333c-4.266667-0.853333-8.533333-4.266667-11.52-8.533333-2.56-4.266667-7.253333-5.973333-11.52-4.266667-8.533333 3.413333-15.36 4.266667-22.186667 5.546667H247.466667c-11.093333 0.853333-21.333333-0.853333-31.573334-5.546667-10.24-4.266667-17.066667-10.666667-23.466666-18.773333-5.12-7.253333-12.8-12.8-22.186667-14.506667l-11.946667-2.56c-8.533333-1.706667-17.066667-5.12-24.746666-10.24-8.533333-5.973333-12.8-11.52-16.213334-18.346666-3.413333-6.4-5.546667-13.653333-5.973333-21.333334v-3.413333a21.12 21.12 0 0 0-14.933333-18.346667c-9.813333-2.986667-17.066667-7.253333-23.466667-12.8a30.293333 30.293333 0 0 1-9.386667-22.186666l0.853334-18.773334c0-7.253333-2.133333-13.653333-7.253334-18.346666a26.453333 26.453333 0 0 1-8.533333-18.346667l-1.28-15.36a225.706667 225.706667 0 0 0-5.546667-33.28c-2.56-9.813333 1.28-19.626667 9.386667-24.32l2.986667-2.133333c4.266667-2.986667 5.973333-8.533333 3.413333-13.653334l-3.413333-4.266666a32 32 0 0 0-12.8-8.533334c-3.413333-0.853333-4.266667-4.266667-4.266667-6.4l4.266667-5.12c2.56-2.986667 2.133333-7.68 0-10.24a19.413333 19.413333 0 0 1-5.546667-11.946666l-0.853333-29.866667c0-5.973333 0.853333-11.946667 2.56-17.92 1.706667-5.12 0-11.093333-5.12-13.653333z m422.4-56.32c2.986667-2.986667 2.56-8.533333 0-10.666666a41.514667 41.514667 0 0 1-9.813334-11.52l-4.266666-6.826667a62.293333 62.293333 0 0 0-11.093334-14.506667l-0.853333-0.853333a36.693333 36.693333 0 0 1-9.813333-12.8c-2.133333-4.266667-2.133333-8.533333 0-12.8l2.56-4.266667c2.56-4.266667 4.266667-10.24 4.266666-15.36v-1.706666c0-4.266667-1.706667-8.533333-4.266666-12.8-1.706667-3.413333-3.413333-7.68-4.266667-11.946667V345.6c-1.28-5.12 0-10.666667 3.413333-14.933333 3.413333-5.546667 5.973333-10.666667 7.253334-17.066667v-0.853333c1.706667-4.266667 0.853333-9.813333-1.706667-14.08s-3.413333-8.533333-1.706667-13.653334l2.986667-8.533333c2.56-7.68 6.4-14.506667 11.52-20.48l5.973333-6.4 4.266667-5.12 2.56-2.56c2.56-2.56 2.986667-6.826667 0.853333-10.24-2.133333-4.266667-3.413333-8.533333-2.56-12.8l0.853334-5.973333c1.28-8.533333 4.266667-17.066667 9.813333-23.893334l1.706667-1.706666c6.4-8.533333 14.506667-14.08 23.893333-17.066667l11.52-4.266667c5.12-1.706667 8.533333-7.253333 8.533333-12.8 0-6.826667 2.133333-12.8 5.973334-18.346666l2.133333-2.133334c4.266667-7.253333 9.386667-14.506667 12.8-22.186666l2.986667-5.546667c0.853333-1.28 1.28-2.986667 1.28-4.266667 0-7.253333-4.266667-13.653333-11.093334-14.08L501.76 85.333333c-10.666667-0.853333-21.333333 0-31.573333 0l-36.266667 4.266667c-5.546667 0-9.813333 4.266667-10.24 10.24 0 5.973333-4.266667 11.093333-9.386667 12.8l-15.36 4.266667-4.266666 1.28-12.8 4.266666c-9.386667 2.986667-17.066667 9.813333-21.333334 19.2l-3.413333 5.546667c-4.266667 9.386667-11.52 17.066667-20.48 22.613333-8.533333 5.546667-12.8 14.506667-13.653333 24.746667v4.266667c-0.853333 8.533333-3.413333 17.066667-8.533334 23.04l-2.133333 3.413333c-3.413333 4.266667-4.266667 9.813333-2.133333 14.506667 2.133333 5.12 3.413333 10.666667 2.986666 16.213333v22.613333c0 5.973333-4.266667 11.093333-8.533333 12.8-5.973333 2.133333-9.813333 6.826667-11.52 12.8l-2.133333 8.533334c-1.706667 8.533333 1.28 17.066667 8.533333 22.186666 6.826667 5.12 11.093333 12.8 12.8 22.186667v7.68c1.28 8.533333 5.973333 17.066667 13.653333 21.333333 7.68 5.12 13.653333 12.8 17.066667 21.333334l2.133333 6.826666c3.413333 9.386667 11.093333 14.933333 19.626667 15.786667h2.56c7.68 0 14.506667 4.266667 18.773333 11.093333 4.266667 6.826667 11.093333 11.52 18.773334 12.8l11.946666 3.413334c7.253333 2.133333 14.08 5.973333 19.626667 11.52l0.853333 0.853333c4.266667 3.413333 11.093333 2.986667 14.933334-1.706667l2.986666-3.413333z m48.64-39.253333c4.266667 2.56 8.533333 1.28 10.24-2.56l1.28-2.133333c2.986667-5.973333 6.826667-11.946667 11.093333-17.066667l8.533333-12.8c1.28 0 1.706667-0.853333 2.133334-1.706667l10.24-13.653333c4.266667-4.266667 9.386667-7.253333 15.36-7.253333 5.546667 0 10.24-2.986667 12.8-8.533334 1.706667-5.973333 4.266667-11.52 9.386666-16.213333l2.133334-2.56c4.266667-4.266667 8.533333-6.4 12.8-8.533333 5.546667-0.853333 10.666667-1.706667 15.786666-1.706667h12.8c5.12 0 9.386667-2.133333 11.946667-6.4 2.56-4.266667 6.4-7.253333 10.666667-9.386667l4.266666-1.706666c6.826667-2.986667 14.506667-5.12 22.186667-5.973334l8.533333-0.853333c5.12 0 10.666667 0 15.786667 2.986667 4.266667 2.986667 9.813333 2.56 14.08-0.853334l2.986667-1.706666c6.4-4.266667 13.653333-7.68 21.333333-8.533334h0.853333c8.533333-1.706667 16.213333-1.706667 24.746667-1.28h4.266667c8.533333 1.28 15.786667 4.266667 21.333333 10.666667l1.28 1.706667c4.266667 4.266667 11.093333 7.68 17.066667 7.68h7.253333c2.133333 0 4.266667-0.853333 5.546667-2.986667 1.28-1.28 3.413333-2.56 5.546666-2.56h4.266667c5.973333 0 11.52 1.706667 17.066667 3.413333l7.253333 2.986667c6.826667 2.133333 14.08 4.266667 21.333333 5.12h5.12c3.413333 0 5.546667-2.133333 5.546667-5.12 0-4.266667-0.853333-8.533333-2.986667-11.946667L882.346667 298.666667c-3.413333-5.546667-5.973333-11.52-8.533334-17.066667l-0.853333-2.133333c-2.133333-4.266667-2.133333-8.533333 0-12.8V264.533333a7.253333 7.253333 0 0 0-4.266667-8.533333h-3.413333a33.962667 33.962667 0 0 1-17.066667-11.52l-4.266666-4.266667c-4.266667-4.266667-6.826667-10.666667-8.533334-17.066666-2.133333-5.546667-6.826667-9.813333-12.8-9.813334h-17.92a23.552 23.552 0 0 1-15.786666-9.386666l-1.706667-2.133334c-2.986667-4.266667-5.546667-9.386667-7.253333-14.506666-2.133333-4.266667-6.826667-6.826667-11.093334-5.546667l-5.12 1.706667c-8.533333 2.986667-17.066667 4.266667-25.6 3.413333l-6.826666-0.853333c-7.253333 0-14.08-2.986667-19.626667-7.253334l-4.266667-2.986666c-3.413333-2.56-6.826667-4.266667-10.666666-5.973334-4.266667-1.706667-7.68-0.853333-10.24 2.133334l-2.133334 2.56c-4.266667 4.266667-10.24 7.68-16.213333 8.533333l-23.04 1.28c-4.266667 0-8.533333 2.133333-11.52 5.12-3.413333 2.986667-7.253333 5.12-11.52 5.973333h-0.853333c-4.266667 0-8.533333 2.986667-12.8 5.973334v0.853333c-4.266667 4.266667-9.813333 6.4-15.36 6.4l-1.706667 0.853333c-5.12 0-10.24 0-15.36 1.28h-5.12c-7.253333 1.28-12.8 7.253333-14.506667 14.933334l-1.706666 9.813333a42.666667 42.666667 0 0 1-8.533334 18.346667c-4.266667 5.12-9.386667 8.533333-15.786666 8.533333H523.093333c-4.266667 0.853333-8.533333 5.546667-7.68 10.666667 0.853333 7.253333 0 13.653333-1.28 20.053333l-1.706666 7.253333c-1.706667 6.4-5.973333 11.52-11.52 13.653334l-2.56 1.28h-0.853334c-2.56 1.706667-4.266667 5.546667-2.133333 8.533333 2.56 4.266667 3.413333 8.533333 2.986667 12.8l-1.28 13.653333c0 5.12-2.133333 9.813333-4.266667 14.08-2.56 4.266667-2.56 8.533333-0.853333 12.8l4.266666 9.386667c2.133333 4.266667 2.56 8.533333 1.28 13.653333-1.28 4.266667-2.133333 8.533333-1.706666 12.8 0 4.266667 2.56 8.533333 5.973333 10.24l0.853333 0.853334z m337.066666 308.48c4.266667 4.266667 10.666667 5.973333 15.786667 2.56l8.533333-5.546667c4.266667-2.986667 7.68-7.253333 9.386667-12.8v-0.853333l4.266667-12.8 2.56-4.266667 1.706666-4.266666 1.706667-2.986667c1.706667-3.413333 4.266667-5.973333 8.533333-7.253333l1.706667-0.853334c3.413333-0.853333 5.546667-4.266667 5.546667-7.68 0-4.266667 2.133333-7.68 4.266666-10.666666l3.413334-2.986667 8.533333-11.093333v-0.853334c2.56-3.413333 4.266667-7.253333 5.12-11.52 0.853333-4.266667 0-8.533333-1.706667-12.8l-0.853333-1.706666a39.253333 39.253333 0 0 1-2.986667-11.093334l-1.28-11.946666-1.28-12.8c0-4.266667 1.706667-8.533333 4.266667-12.8a41.386667 41.386667 0 0 0 6.826667-11.946667v-1.706667l0.853333-0.853333c0.853333-4.266667-1.28-8.533333-5.12-8.533333-4.266667-2.133333-8.533333-5.546667-9.813333-10.666667l-1.28-2.56c-2.133333-7.68-3.413333-15.36-3.413334-23.04l0.853334-21.333333v-1.28a12.8 12.8 0 0 0-12.8-12.8h-0.853334c-8.533333 0-15.36-2.56-21.333333-8.533334l-3.413333-4.266666-8.533334-9.813334-11.093333-12.8c-4.266667-5.973333-8.533333-11.093333-14.08-16.213333-4.266667-4.266667-10.666667-8.533333-17.066667-9.386667l-8.533333-1.28c-4.266667-0.853333-9.813333-2.986667-14.506667-5.973333-3.413333-2.56-8.533333-1.706667-11.946666 1.706667l-5.546667 5.973333-2.56 1.706667c-2.986667 0.853333-5.973333-0.853333-7.253333-4.266667a21.418667 21.418667 0 0 1 0.853333-16.213333v-2.56c0-2.986667-2.56-5.12-5.12-4.266667h-6.826667c-7.68 0-15.36-0.853333-22.613333-4.266667l-4.266667-1.706666a32.597333 32.597333 0 0 0-14.08-3.413334c-4.266667 0-8.533333 0.853333-12.8 3.413334l-1.706666 1.28c-5.12 3.413333-11.093333 5.12-17.066667 5.546666h-14.08c-6.4 0-12.8 2.133333-17.066667 5.546667-5.546667 3.413333-11.52 5.546667-17.92 6.826667l-11.52 1.706666c-5.12 1.28-10.666667 3.413333-15.36 7.253334-4.266667 4.266667-10.24 6.826667-15.786666 8.533333l-2.133334 0.853333a31.573333 31.573333 0 0 0-17.066666 12.8l-5.12 5.12a11.52 11.52 0 0 0 0 13.653334c2.56 4.266667 7.68 5.546667 12.8 4.266666l6.4-2.56c3.413333-1.28 7.253333 0 10.24 1.706667 2.56 2.133333 6.4 3.413333 10.24 2.986667l10.666666-1.28c5.973333 0 11.946667 0 17.92 1.706666 6.4 2.133333 11.946667 4.266667 17.066667 8.533334s10.666667 5.973333 17.066667 6.826666c6.4 0.853333 12.8 2.133333 18.773333 4.266667l4.266667 0.853333c4.266667 1.28 7.68 4.266667 10.24 8.533334 2.133333 3.413333 4.266667 8.533333 4.266666 12.8v1.28c0 5.12 4.266667 8.533333 8.533334 8.533333h2.56c6.826667 0 14.08 0.853333 21.333333 2.986667l2.986667 1.28c4.266667 1.706667 8.533333 4.266667 11.52 8.533333 3.413333 4.266667 5.546667 8.533333 6.826666 12.8l1.28 5.973333c1.28 6.4 1.706667 12.8 1.706667 19.626667v2.133333c0 4.266667 2.986667 8.533333 7.68 10.24 4.266667 0.853333 9.386667 2.56 14.08 5.12l2.133333 0.853334c5.546667 3.413333 11.093333 7.68 15.36 12.8l2.133334 2.986666c5.546667 6.4 8.533333 14.506667 8.533333 22.613334v2.986666c0 6.4-1.28 12.8-3.413333 18.773334-1.706667 5.12 0 11.093333 5.546666 12.8l2.986667 2.133333c6.4 2.56 11.946667 7.253333 16.213333 12.8 4.266667 6.4 5.973333 13.653333 5.973334 21.333333v12.8c-0.853333 4.266667-2.133333 7.68-4.266667 10.666667s-2.133333 7.253333 0 10.24l2.56 4.266667z m-273.066666-218.453333h-0.853334c-1.706667 0-2.56 2.133333-2.133333 4.266666l1.706667 8.533334c1.706667 6.826667 2.56 13.653333 3.413333 20.48 0.853333 6.826667 4.266667 12.8 9.386667 17.066666h1.706666c6.4 5.12 10.24 12.8 10.666667 20.48v21.333334c-0.853333 4.266667 0 8.533333 2.56 11.946666l2.133333 2.133334c4.266667 5.12 5.973333 11.093333 6.4 17.066666l1.28 23.466667c0 5.546667-3.413333 10.24-8.533333 11.093333l-4.266667 0.853334c-2.986667 0-4.266667 3.413333-4.266666 6.4 0 3.413333 1.28 7.253333 2.56 10.666666v0.853334c1.28 4.266667 1.706667 8.533333 1.28 12.8l-1.706667 11.52c-1.706667 8.533333-4.266667 16.213333-8.533333 23.893333l-2.986667 5.12a18.346667 18.346667 0 0 1-8.533333 8.533333c-4.266667 1.706667-7.253333 5.12-8.533334 9.386667l-3.413333 15.36c-2.133333 8.533333-5.973333 17.066667-11.093333 25.6h-0.853334c-5.12 6.826667-11.52 12.8-19.2 17.066667l-5.12 3.413333-12.8 6.4c-4.266667 1.706667-6.826667 5.546667-7.68 10.24l-2.133333 14.08c-1.28 8.533333-4.266667 15.786667-10.24 21.333333l-5.546667 6.4-6.4 6.4L469.333333 896c-5.12 5.973333-12.8 8.533333-21.333333 7.253333l-15.36-2.986666-14.08-1.706667h-3.84c-1.706667 1.706667-2.133333 4.266667-0.853333 6.826667 2.986667 5.12 7.68 8.533333 12.8 8.533333l9.386666 1.706667c4.266667 0 9.386667 2.133333 13.653334 4.266666 4.266667 2.986667 8.533333 5.12 13.653333 6.4h0.853333c5.546667 2.133333 11.52 2.56 17.066667 2.133334l6.4-0.853334c7.253333-0.853333 14.08 0 20.053333 2.56l5.12 1.706667c2.133333 0.853333 5.546667 0 7.68-2.133333 2.56-2.56 5.12-4.266667 8.533334-5.546667l3.413333-0.853333c5.546667-1.706667 11.093333-2.56 17.066667-2.56h3.413333c5.12 0 9.813333 0.853333 14.08 3.413333l1.706667 0.853333c2.986667 1.28 6.4 0 8.533333-2.56 1.28-2.986667 4.266667-5.973333 7.253333-8.533333l10.666667-7.253333 6.826667-4.266667 3.413333-2.133333c4.266667-2.986667 10.24-4.266667 15.36-4.266667l15.36-1.28c5.973333-0.853333 11.093333-5.12 12.8-11.093333 1.706667-6.4 4.266667-12.8 8.533333-18.346667s8.533333-10.24 12.8-14.506667c5.546667-4.266667 11.093333-6.4 17.066667-6.826666h3.413333c6.826667-1.28 11.946667-7.68 11.52-14.506667v-28.586667c0.853333-4.266667 2.56-9.813333 5.12-14.08l8.533334-12.8 3.413333-4.266666c2.56-2.133333 4.266667-5.12 7.253333-8.533334l4.266667-5.546666a11.52 11.52 0 0 0-0.853333-13.653334c-4.266667-4.266667-6.4-10.24-7.253334-16.213333v-1.706667c-0.853333-6.826667-0.853333-14.08 1.28-21.333333v-2.133333c2.133333-5.546667 5.12-11.093333 8.533334-16.213334 3.413333-4.266667 2.986667-10.24-1.28-13.653333l-7.253334-6.4a31.573333 31.573333 0 0 1-10.24-20.48l-0.853333-8.533333c0-2.56 0-5.546667-0.853333-8.533334l-0.853334-6.4a24.448 24.448 0 0 0-11.093333-17.066666l-2.986667-0.853334c-4.266667-2.56-8.533333-6.4-11.946666-11.52-3.413333-4.266667-5.12-10.24-6.4-16.213333l-1.28-7.253333c0-2.56-1.706667-4.266667-4.266667-5.546667l-6.826667-2.133333-13.653333-4.266667c-4.266667-0.853333-8.533333-4.266667-11.52-7.253333h-0.853333a6.101333 6.101333 0 0 0-9.386667-0.853334l-4.266667 4.266667c-0.853333 1.28-1.706667 1.706667-2.986666 1.28-2.56 0-4.266667-2.133333-3.413334-4.266667a19.370667 19.370667 0 0 0-7.253333-17.92l-5.546667-4.266666-12.8-8.533334c-3.413333-1.28-8.533333 0-10.24 4.266667l-1.706666 2.56c0 0.853333-1.28 1.28-1.706667 1.706667-1.706667 0-4.266667 0-4.266667-2.133334l-1.28-2.133333c-1.28-2.56-4.266667-4.266667-6.826666-5.12z m-51.2 42.666666l-2.133334-2.133333c-2.133333-1.706667-4.266667-1.28-6.4 0.853333-2.986667 5.12-5.546667 10.666667-6.826666 16.213334v0.853333c-1.28 5.546667-6.4 9.386667-11.52 8.533333H484.266667c-5.973333 0-10.666667 5.12-10.666667 11.093334 0 7.68-2.56 15.36-7.253333 21.333333l-2.56 2.56c-4.266667 5.546667-10.666667 9.386667-17.066667 11.52l-3.413333 0.853333c-4.266667 1.28-7.68 4.266667-8.533334 9.386667 0 4.266667-2.56 8.533333-5.973333 11.946667l-4.266667 3.413333c-5.12 5.546667-12.8 8.533333-20.48 9.386667l-21.333333 2.133333c-6.826667 0-12.8 4.266667-17.066667 10.666667-4.266667 6.4-10.666667 10.666667-17.066666 11.52l-9.386667 0.853333c-6.826667 0.853333-14.08 0.853333-21.333333-0.853333l-4.266667-0.853334-11.52-2.986666c-4.266667-1.28-7.68 0-10.24 2.986666l-4.266667 5.546667a24.746667 24.746667 0 0 1-21.333333 8.533333l-27.733333-3.413333c-4.266667 0-7.68-2.133333-11.52-4.266667-4.266667-2.56-7.253333-5.546667-10.24-8.533333l-10.666667-12.8c-1.28-0.853333-3.413333-1.28-5.546667-0.853333l-5.973333 2.56-23.893333 5.973333c-4.266667 1.28-9.813333 0-14.08-2.56-4.266667-3.413333-9.386667-4.266667-14.506667-4.266667H136.533333c-5.12 1.28-8.533333 6.826667-6.826666 11.946667l1.706666 8.533333c1.28 4.266667 0.853333 9.386667-1.28 13.653334s-1.706667 8.533333 1.28 12.8l2.56 3.413333c3.413333 5.12 8.533333 9.386667 12.8 13.653333 4.266667 4.266667 8.533333 8.533333 11.946667 14.08l6.4 11.52c3.413333 5.973333 8.533333 9.386667 15.36 9.386667 6.4 0 12.8 2.133333 17.92 6.4l12.8 11.946667c3.413333 2.986667 8.533333 3.413333 11.946667 0.853333l2.133333-0.853333c2.56 0 4.266667 1.706667 4.266667 4.266666v2.133334c0 5.546667 4.266667 10.666667 9.813333 12.8l19.2 4.266666c6.826667 2.133333 13.653333 4.266667 20.053333 8.533334h3.413334c3.413333 0 6.4-2.986667 5.973333-6.826667v-14.933333c0-4.266667 1.706667-8.533333 5.12-10.24l2.133333-0.853334c2.133333 0.853333 4.266667 2.56 3.413334 4.266667v7.253333c0 5.546667 1.706667 10.666667 5.546666 14.506667 4.266667 4.266667 9.813333 5.12 14.506667 3.413333 5.12-2.133333 10.24-2.56 15.786667-2.133333l15.786666 0.853333c7.68 0.853333 14.933333 0 21.333334-2.986666 7.68-2.56 14.08-5.973333 20.053333-10.666667l2.56-1.706667 12.8-11.52c4.266667-4.266667 9.813333-6.4 14.933333-6.4h17.066667c8.533333-0.853333 16.213333-8.533333 17.066667-17.066666l1.706666-8.533334c0-5.546667 2.56-10.666667 6.4-14.933333 4.266667-4.266667 8.533333-6.826667 12.8-8.533333l5.12-2.133334c7.253333-2.986667 12.8-9.386667 15.36-17.066666l2.56-10.24c2.133333-8.533333 6.4-17.066667 12.8-22.613334l0.853334-0.853333c5.12-4.266667 5.973333-12.8 2.56-18.773333l-1.28-2.986667a17.92 17.92 0 0 1-1.28-16.213333c2.133333-5.973333 4.266667-11.093333 7.68-16.213334l4.266666-5.973333c1.706667-3.413333 1.706667-8.533333-0.853333-11.52a20.394667 20.394667 0 0 1-4.266667-11.946667l-0.853333-5.973333v-14.506667c0.853333-4.266667 0-9.813333-1.28-14.08l-1.706667-5.12z m-61.013334-32.426666v-1.28c0-4.266667-2.56-6.826667-5.973333-6.826667h-11.093333c-4.266667 0.853333-8.533333 0.853333-11.946667 0h-19.2c-9.813333 0-19.2-1.706667-28.586667-4.266667l-10.24-2.56-8.533333-2.56-19.2-6.4a36.224 36.224 0 0 1-22.613333-19.2l-2.133334-4.266666a14.378667 14.378667 0 0 0-15.786666-8.533334c-7.253333 0-14.506667 0-21.333334-3.413333l-5.12-2.133333c-9.813333-4.266667-17.066667-12.8-17.066666-24.32l-1.706667-11.52c-1.28-5.973333-5.12-11.52-10.24-13.653334-5.973333-2.56-11.52-5.973333-17.066667-9.813333l-2.133333-1.28a46.933333 46.933333 0 0 1-14.933333-20.053333l-0.853334-2.56a40.106667 40.106667 0 0 1-0.853333-21.333334l0.853333-2.56c1.706667-5.546667 2.133333-11.093333 2.133334-17.066666a20.053333 20.053333 0 0 0-5.973334-14.08l-5.973333-5.546667a30.976 30.976 0 0 1-11.52-22.613333c-0.853333-9.386667-0.853333-18.346667 0.853333-27.306667v-2.56a8.533333 8.533333 0 0 0-8.533333-8.533333H179.2c-5.546667 0-10.24 3.413333-12.8 8.533333-2.133333 5.973333-5.546667 10.666667-9.386667 15.36l-1.706666 2.133333-8.533334 8.533334-4.266666 4.266666c-4.266667 4.266667-6.826667 10.666667-7.68 17.066667-0.853333 6.4-2.56 12.8-5.12 18.773333l-0.853334 2.133334c-2.133333 5.12-5.546667 9.813333-9.813333 12.8-4.266667 3.413333-7.253333 8.533333-7.253333 13.653333l-0.853334 19.626667c0 8.533333-1.28 17.066667-4.266666 25.6l-0.853334 3.413333c-2.133333 5.546667 0 11.52 5.12 14.08l17.92 7.68 1.706667 0.853333c1.28 0 1.706667 0.853333 2.133333 2.133334 1.28 1.706667 0 4.266667-1.28 4.266666l-4.266666 2.133334c-2.56 0.853333-4.266667 3.413333-5.12 6.4l-0.853334 4.266666v0.853334l-4.266666 23.893333c-0.853333 3.413333-0.853333 7.253333-0.853334 11.093333 0 3.413333 2.133333 6.4 5.12 7.68l9.386667 4.266667c4.266667 2.56 9.386667 5.546667 12.8 8.533333l4.266667 3.413334c1.28 1.706667 3.413333 3.413333 5.12 4.266666l1.706666 1.706667c2.986667 2.56 5.12 5.973333 5.973334 9.813333l4.266666 19.2c0 5.12 4.266667 9.386667 8.533334 10.666667l6.826666 2.133333s1.28 0 2.133334 0.853334l8.533333 2.56c6.826667 2.133333 12.8 5.973333 17.92 11.093333 5.12 4.266667 10.24 9.813333 14.506667 15.786667l1.706666 1.706666c3.413333 4.266667 8.533333 6.4 13.653334 5.12s10.666667-1.706667 16.213333-1.706666h6.4c4.266667 0 9.813333 1.28 14.506667 4.266666 4.266667 2.56 9.813333 4.266667 14.933333 6.4h1.28c5.12 2.133333 10.666667 1.28 14.933333-1.706666 4.266667-3.413333 9.813333-5.12 15.36-5.12l20.053334 1.28c4.266667 0 8.533333-0.853333 10.666666-4.266667h0.853334l7.253333-6.826667 2.133333-2.133333c3.413333-4.266667 8.533333-5.973333 13.653334-6.4h19.2c5.12 0 9.813333-4.266667 11.946666-8.533333 2.133333-4.266667 6.4-7.68 11.52-8.533334l8.533334-1.706666c3.413333 0 6.4-2.986667 7.68-6.826667 1.28-4.266667 3.413333-7.68 6.4-10.24l6.826666-6.826667c4.266667-4.266667 6.4-8.533333 7.253334-13.653333z" p-id="1048"></path></svg>

class Header extends React.Component {
	render() {
		const href = window.location.href;
		return (
			<header>
			    <h3 className="header-title" onClick={() => this.props.history.push('/')}>MinimalistYing.io</h3>
			    <nav>
			        <ul>
			            <li className={href.endsWith('index.html') || !href.endsWith('html') ? 'active' : ''}>
			            	<NavLink to="/index.html" exact>文章</NavLink>
			            </li>
			            <li className={href.endsWith('memo.html') ? 'active' : ''}>
			            	<NavLink to="/memo.html" exact>备忘</NavLink>
			           	</li>
									<li className={href.endsWith('tools.html') ? 'active' : ''}>
			            	<NavLink to="/tools.html" exact>收藏</NavLink>
			           	</li>
									<li className={href.endsWith('games.html') ? 'active' : ''}>
			            	<NavLink to="/games.html" exact>玩世</NavLink>
			           	</li>
									<li className='mine'>
			            	<NavLink to="#" exact>我的</NavLink>
										<ul>
											<li><a href="https://github.com/MinimalistYing" target="_blank">{github}Github</a></li>
											<li><a href="https://leetcode.com/MinimalistYing" target="_blank">{leetcode}Leetcode</a></li>
											<li><a href="https://stackoverflow.com/users/8459774/minimalistying" target="_blank">{stackoverflow}StackOverflow</a></li>
											<li><a href="https://codesandbox.io/u/MinimalistYing/sandboxes" target="_blank">{codesandbox}CodeSandBox</a></li>
											<li><a href="https://www.codewars.com/users/MinimalistYing" target="_blank">{codewars}Codewars</a></li>
										</ul>
			           	</li>
			        </ul>
			    </nav>
			</header>
		)
	}
}

export default withRouter(Header)

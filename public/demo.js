(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["demo"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Dashboard.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/Dashboard.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_Charts_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/components/Charts/config */ "./resources/js/components/Charts/config.js");
/* harmony import */ var _components_Charts_LineChart__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/Charts/LineChart */ "./resources/js/components/Charts/LineChart.js");
/* harmony import */ var _components_Charts_BarChart__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/Charts/BarChart */ "./resources/js/components/Charts/BarChart.js");
/* harmony import */ var _components_BaseProgress__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/BaseProgress */ "./resources/js/components/BaseProgress.vue");
/* harmony import */ var _components_Cards_StatsCard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/components/Cards/StatsCard */ "./resources/js/components/Cards/StatsCard.vue");
/* harmony import */ var _Dashboard_SocialTrafficTable__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Dashboard/SocialTrafficTable */ "./resources/js/views/Dashboard/SocialTrafficTable.vue");
/* harmony import */ var _Dashboard_PageVisitsTable__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Dashboard/PageVisitsTable */ "./resources/js/views/Dashboard/PageVisitsTable.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
// Charts


 // Components


 // Tables



/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    LineChart: _components_Charts_LineChart__WEBPACK_IMPORTED_MODULE_1__["default"],
    BarChart: _components_Charts_BarChart__WEBPACK_IMPORTED_MODULE_2__["default"],
    BaseProgress: _components_BaseProgress__WEBPACK_IMPORTED_MODULE_3__["default"],
    StatsCard: _components_Cards_StatsCard__WEBPACK_IMPORTED_MODULE_4__["default"],
    PageVisitsTable: _Dashboard_PageVisitsTable__WEBPACK_IMPORTED_MODULE_6__["default"],
    SocialTrafficTable: _Dashboard_SocialTrafficTable__WEBPACK_IMPORTED_MODULE_5__["default"]
  },
  data: function data() {
    return {
      bigLineChart: {
        allData: [[0, 20, 10, 30, 15, 40, 20, 60, 60], [0, 20, 5, 25, 10, 30, 15, 40, 40]],
        activeIndex: 0,
        chartData: {
          datasets: [{
            label: 'Performance',
            data: [0, 20, 10, 30, 15, 40, 20, 60, 60]
          }],
          labels: ['May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
        },
        extraOptions: _components_Charts_config__WEBPACK_IMPORTED_MODULE_0__["blueChartOptions"]
      },
      redBarChart: {
        chartData: {
          labels: ['Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
          datasets: [{
            label: 'Sales',
            data: [25, 20, 30, 22, 17, 29]
          }]
        },
        extraOptions: _components_Charts_config__WEBPACK_IMPORTED_MODULE_0__["blueChartOptions"]
      }
    };
  },
  methods: {
    initBigChart: function initBigChart(index) {
      var chartData = {
        datasets: [{
          label: 'Performance',
          data: this.bigLineChart.allData[index]
        }],
        labels: ['May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
      };
      this.bigLineChart.chartData = chartData;
      this.bigLineChart.activeIndex = index;
    }
  },
  mounted: function mounted() {
    this.initBigChart(0);
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Dashboard/PageVisitsTable.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/Dashboard/PageVisitsTable.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var element_ui__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! element-ui */ "./node_modules/element-ui/lib/element-ui.common.js");
/* harmony import */ var element_ui__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(element_ui__WEBPACK_IMPORTED_MODULE_0__);
var _components;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'page-visits-table',
  components: (_components = {}, _defineProperty(_components, element_ui__WEBPACK_IMPORTED_MODULE_0__["Table"].name, element_ui__WEBPACK_IMPORTED_MODULE_0__["Table"]), _defineProperty(_components, element_ui__WEBPACK_IMPORTED_MODULE_0__["TableColumn"].name, element_ui__WEBPACK_IMPORTED_MODULE_0__["TableColumn"]), _defineProperty(_components, element_ui__WEBPACK_IMPORTED_MODULE_0__["Dropdown"].name, element_ui__WEBPACK_IMPORTED_MODULE_0__["Dropdown"]), _defineProperty(_components, element_ui__WEBPACK_IMPORTED_MODULE_0__["DropdownItem"].name, element_ui__WEBPACK_IMPORTED_MODULE_0__["DropdownItem"]), _defineProperty(_components, element_ui__WEBPACK_IMPORTED_MODULE_0__["DropdownMenu"].name, element_ui__WEBPACK_IMPORTED_MODULE_0__["DropdownMenu"]), _components),
  data: function data() {
    return {
      tableData: [{
        page: '/argon/',
        visitors: '4,569',
        unique: '340',
        bounceRate: '46,53%'
      }, {
        page: '/argon/index.html',
        visitors: '3,985',
        unique: '319',
        bounceRate: '46,53%'
      }, {
        page: '/argon/charts.html',
        visitors: '3,513',
        unique: '294',
        bounceRate: '36,49%'
      }, {
        page: '/argon/tables.html',
        visitors: '2,050',
        unique: '147',
        bounceRate: '50,87%'
      }, {
        page: '/argon/profile.html',
        visitors: '1,795',
        unique: '190',
        bounceRate: '46,53%'
      }]
    };
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Dashboard/SocialTrafficTable.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/Dashboard/SocialTrafficTable.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/components */ "./resources/js/components/index.js");
/* harmony import */ var element_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! element-ui */ "./node_modules/element-ui/lib/element-ui.common.js");
/* harmony import */ var element_ui__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(element_ui__WEBPACK_IMPORTED_MODULE_1__);
var _components;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'social-traffic-table',
  components: (_components = {
    BaseProgress: _components__WEBPACK_IMPORTED_MODULE_0__["BaseProgress"]
  }, _defineProperty(_components, element_ui__WEBPACK_IMPORTED_MODULE_1__["Table"].name, element_ui__WEBPACK_IMPORTED_MODULE_1__["Table"]), _defineProperty(_components, element_ui__WEBPACK_IMPORTED_MODULE_1__["TableColumn"].name, element_ui__WEBPACK_IMPORTED_MODULE_1__["TableColumn"]), _defineProperty(_components, element_ui__WEBPACK_IMPORTED_MODULE_1__["Dropdown"].name, element_ui__WEBPACK_IMPORTED_MODULE_1__["Dropdown"]), _defineProperty(_components, element_ui__WEBPACK_IMPORTED_MODULE_1__["DropdownItem"].name, element_ui__WEBPACK_IMPORTED_MODULE_1__["DropdownItem"]), _defineProperty(_components, element_ui__WEBPACK_IMPORTED_MODULE_1__["DropdownMenu"].name, element_ui__WEBPACK_IMPORTED_MODULE_1__["DropdownMenu"]), _components),
  data: function data() {
    return {
      tableData: [{
        name: 'Facebook',
        visitors: '1,480',
        progress: 60,
        progressType: 'gradient-danger'
      }, {
        name: 'LinkedIn',
        visitors: '5,480',
        progress: 70,
        progressType: 'gradient-success'
      }, {
        name: 'Google',
        visitors: '4,807',
        progress: 80,
        progressType: 'gradient-primary'
      }, {
        name: 'Instagram',
        visitors: '3,678',
        progress: 75,
        progressType: 'gradient-info'
      }, {
        name: 'Twitter',
        visitors: '2,645',
        progress: 30,
        progressType: 'gradient-warning'
      }]
    };
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/GoogleMaps.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/GoogleMaps.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Maps_API_KEY__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Maps/API_KEY */ "./resources/js/views/Maps/API_KEY.js");
/* harmony import */ var google_maps__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! google-maps */ "./node_modules/google-maps/lib/Google.js");
/* harmony import */ var google_maps__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(google_maps__WEBPACK_IMPORTED_MODULE_1__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


google_maps__WEBPACK_IMPORTED_MODULE_1___default.a.KEY = _Maps_API_KEY__WEBPACK_IMPORTED_MODULE_0__["API_KEY"];
/* harmony default export */ __webpack_exports__["default"] = ({
  methods: {
    initMap: function initMap(google) {
      var map,
          lat = 40.748817,
          lng = -73.985428,
          color = "#5e72e4";
      map = document.getElementById('map-custom');
      var myLatlng = new google.maps.LatLng(lat, lng);
      var mapOptions = {
        zoom: 12,
        scrollwheel: false,
        center: myLatlng,
        mapTypeId: google.maps.MapTypeId.ROADMAP,
        styles: [{
          "featureType": "administrative",
          "elementType": "labels.text.fill",
          "stylers": [{
            "color": "#444444"
          }]
        }, {
          "featureType": "landscape",
          "elementType": "all",
          "stylers": [{
            "color": "#f2f2f2"
          }]
        }, {
          "featureType": "poi",
          "elementType": "all",
          "stylers": [{
            "visibility": "off"
          }]
        }, {
          "featureType": "road",
          "elementType": "all",
          "stylers": [{
            "saturation": -100
          }, {
            "lightness": 45
          }]
        }, {
          "featureType": "road.highway",
          "elementType": "all",
          "stylers": [{
            "visibility": "simplified"
          }]
        }, {
          "featureType": "road.arterial",
          "elementType": "labels.icon",
          "stylers": [{
            "visibility": "off"
          }]
        }, {
          "featureType": "transit",
          "elementType": "all",
          "stylers": [{
            "visibility": "off"
          }]
        }, {
          "featureType": "water",
          "elementType": "all",
          "stylers": [{
            "color": color
          }, {
            "visibility": "on"
          }]
        }]
      };
      map = new google.maps.Map(map, mapOptions);
      var marker = new google.maps.Marker({
        position: myLatlng,
        map: map,
        animation: google.maps.Animation.DROP,
        title: 'Hello World!'
      });
      var contentString = '<div class="info-window-content"><h2>Argon Dashboard PRO</h2>' + '<p>A beautiful premium dashboard for Bootstrap 4.</p></div>';
      var infowindow = new google.maps.InfoWindow({
        content: contentString
      });
      google.maps.event.addListener(marker, 'click', function () {
        infowindow.open(map, marker);
      });
    }
  },
  mounted: function mounted() {
    var _this = this;

    google_maps__WEBPACK_IMPORTED_MODULE_1___default.a.load(function (google) {
      _this.initMap(google);
    });
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Icons.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/Icons.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.common.js");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var vue_clipboard2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue-clipboard2 */ "./node_modules/vue-clipboard2/vue-clipboard.js");
/* harmony import */ var vue_clipboard2__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(vue_clipboard2__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_BaseHeader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/BaseHeader */ "./resources/js/components/BaseHeader.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



vue__WEBPACK_IMPORTED_MODULE_0___default.a.use(vue_clipboard2__WEBPACK_IMPORTED_MODULE_1___default.a);
/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'icons',
  components: {
    BaseHeader: _components_BaseHeader__WEBPACK_IMPORTED_MODULE_2__["default"]
  },
  methods: {
    onCopy: function onCopy() {
      this.$notify({
        type: 'info',
        message: 'Copied to clipboard'
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Pages/Login.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/Pages/Login.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      model: {
        email: '',
        password: '',
        rememberMe: false
      }
    };
  },
  methods: {
    onSubmit: function onSubmit() {// this will be called only after form is valid. You can do api call here to login
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Pages/Register.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/Pages/Register.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'register',
  data: function data() {
    return {
      model: {
        name: '',
        email: '',
        password: '',
        agree: false
      }
    };
  },
  methods: {
    onSubmit: function onSubmit() {// this will be called only after form is valid. You can do an api call here to register users
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Pages/UserProfile.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/Pages/UserProfile.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _UserProfile_EditProfileForm_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./UserProfile/EditProfileForm.vue */ "./resources/js/views/Pages/UserProfile/EditProfileForm.vue");
/* harmony import */ var _UserProfile_UserCard_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./UserProfile/UserCard.vue */ "./resources/js/views/Pages/UserProfile/UserCard.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    EditProfileForm: _UserProfile_EditProfileForm_vue__WEBPACK_IMPORTED_MODULE_0__["default"],
    UserCard: _UserProfile_UserCard_vue__WEBPACK_IMPORTED_MODULE_1__["default"]
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Pages/UserProfile/EditProfileForm.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/Pages/UserProfile/EditProfileForm.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      user: {
        company: 'Creative Code Inc.',
        username: 'michael23',
        email: '',
        firstName: 'Mike',
        lastName: 'Andrew',
        address: 'Bld Mihail Kogalniceanu, nr. 8 Bl 1, Sc 1, Ap 09',
        city: 'New York',
        country: 'USA',
        postalCode: '',
        aboutMe: "Lamborghini Mercy, Your chick she so thirsty, I'm in that two seat Lambo."
      }
    };
  },
  methods: {
    updateProfile: function updateProfile() {
      alert('Your data: ' + JSON.stringify(this.user));
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Pages/UserProfile/UserCard.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/Pages/UserProfile/UserCard.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/RegularTables.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/RegularTables.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var element_ui__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! element-ui */ "./node_modules/element-ui/lib/element-ui.common.js");
/* harmony import */ var element_ui__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(element_ui__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Tables_projects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Tables/projects */ "./resources/js/views/Tables/projects.js");
/* harmony import */ var _Tables_users__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Tables/users */ "./resources/js/views/Tables/users.js");
/* harmony import */ var _Tables_RegularTables_LightTable__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Tables/RegularTables/LightTable */ "./resources/js/views/Tables/RegularTables/LightTable.vue");
/* harmony import */ var _Tables_RegularTables_DarkTable__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Tables/RegularTables/DarkTable */ "./resources/js/views/Tables/RegularTables/DarkTable.vue");
var _components;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//





/* harmony default export */ __webpack_exports__["default"] = ({
  components: (_components = {
    LightTable: _Tables_RegularTables_LightTable__WEBPACK_IMPORTED_MODULE_3__["default"],
    DarkTable: _Tables_RegularTables_DarkTable__WEBPACK_IMPORTED_MODULE_4__["default"]
  }, _defineProperty(_components, element_ui__WEBPACK_IMPORTED_MODULE_0__["Dropdown"].name, element_ui__WEBPACK_IMPORTED_MODULE_0__["Dropdown"]), _defineProperty(_components, element_ui__WEBPACK_IMPORTED_MODULE_0__["DropdownItem"].name, element_ui__WEBPACK_IMPORTED_MODULE_0__["DropdownItem"]), _defineProperty(_components, element_ui__WEBPACK_IMPORTED_MODULE_0__["DropdownMenu"].name, element_ui__WEBPACK_IMPORTED_MODULE_0__["DropdownMenu"]), _defineProperty(_components, element_ui__WEBPACK_IMPORTED_MODULE_0__["Table"].name, element_ui__WEBPACK_IMPORTED_MODULE_0__["Table"]), _defineProperty(_components, element_ui__WEBPACK_IMPORTED_MODULE_0__["TableColumn"].name, element_ui__WEBPACK_IMPORTED_MODULE_0__["TableColumn"]), _components),
  data: function data() {
    return {
      projects: _Tables_projects__WEBPACK_IMPORTED_MODULE_1__["default"],
      users: _Tables_users__WEBPACK_IMPORTED_MODULE_2__["default"]
    };
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Tables/RegularTables/DarkTable.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/Tables/RegularTables/DarkTable.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _projects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../projects */ "./resources/js/views/Tables/projects.js");
/* harmony import */ var element_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! element-ui */ "./node_modules/element-ui/lib/element-ui.common.js");
/* harmony import */ var element_ui__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(element_ui__WEBPACK_IMPORTED_MODULE_1__);
var _components;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'light-table',
  components: (_components = {}, _defineProperty(_components, element_ui__WEBPACK_IMPORTED_MODULE_1__["Table"].name, element_ui__WEBPACK_IMPORTED_MODULE_1__["Table"]), _defineProperty(_components, element_ui__WEBPACK_IMPORTED_MODULE_1__["TableColumn"].name, element_ui__WEBPACK_IMPORTED_MODULE_1__["TableColumn"]), _components),
  data: function data() {
    return {
      projects: _projects__WEBPACK_IMPORTED_MODULE_0__["default"],
      currentPage: 1
    };
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Tables/RegularTables/LightTable.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/Tables/RegularTables/LightTable.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _projects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../projects */ "./resources/js/views/Tables/projects.js");
/* harmony import */ var element_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! element-ui */ "./node_modules/element-ui/lib/element-ui.common.js");
/* harmony import */ var element_ui__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(element_ui__WEBPACK_IMPORTED_MODULE_1__);
var _components;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'light-table',
  components: (_components = {}, _defineProperty(_components, element_ui__WEBPACK_IMPORTED_MODULE_1__["Table"].name, element_ui__WEBPACK_IMPORTED_MODULE_1__["Table"]), _defineProperty(_components, element_ui__WEBPACK_IMPORTED_MODULE_1__["TableColumn"].name, element_ui__WEBPACK_IMPORTED_MODULE_1__["TableColumn"]), _components),
  data: function data() {
    return {
      projects: _projects__WEBPACK_IMPORTED_MODULE_0__["default"],
      currentPage: 1
    };
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Dashboard.vue?vue&type=style&index=0&lang=css&":
/*!**********************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/Dashboard.vue?vue&type=style&index=0&lang=css& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.el-table .cell{\n  padding-left: 0px;\n  padding-right: 0px;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/RegularTables.vue?vue&type=style&index=0&lang=css&":
/*!**************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/RegularTables.vue?vue&type=style&index=0&lang=css& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.el-table.table-dark{\n  background-color: #172b4d;\n  color: #f8f9fe;\n}\n.el-table.table-dark th,\n.el-table.table-dark tr{\n  background-color: #172b4d;\n}\n.el-table.table-dark td,\n.el-table.table-dark th.is-leaf{\n  border-bottom: none;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/moment/locale sync recursive ^\\.\\/.*$":
/*!**************************************************!*\
  !*** ./node_modules/moment/locale sync ^\.\/.*$ ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": "./node_modules/moment/locale/af.js",
	"./af.js": "./node_modules/moment/locale/af.js",
	"./ar": "./node_modules/moment/locale/ar.js",
	"./ar-dz": "./node_modules/moment/locale/ar-dz.js",
	"./ar-dz.js": "./node_modules/moment/locale/ar-dz.js",
	"./ar-kw": "./node_modules/moment/locale/ar-kw.js",
	"./ar-kw.js": "./node_modules/moment/locale/ar-kw.js",
	"./ar-ly": "./node_modules/moment/locale/ar-ly.js",
	"./ar-ly.js": "./node_modules/moment/locale/ar-ly.js",
	"./ar-ma": "./node_modules/moment/locale/ar-ma.js",
	"./ar-ma.js": "./node_modules/moment/locale/ar-ma.js",
	"./ar-sa": "./node_modules/moment/locale/ar-sa.js",
	"./ar-sa.js": "./node_modules/moment/locale/ar-sa.js",
	"./ar-tn": "./node_modules/moment/locale/ar-tn.js",
	"./ar-tn.js": "./node_modules/moment/locale/ar-tn.js",
	"./ar.js": "./node_modules/moment/locale/ar.js",
	"./az": "./node_modules/moment/locale/az.js",
	"./az.js": "./node_modules/moment/locale/az.js",
	"./be": "./node_modules/moment/locale/be.js",
	"./be.js": "./node_modules/moment/locale/be.js",
	"./bg": "./node_modules/moment/locale/bg.js",
	"./bg.js": "./node_modules/moment/locale/bg.js",
	"./bm": "./node_modules/moment/locale/bm.js",
	"./bm.js": "./node_modules/moment/locale/bm.js",
	"./bn": "./node_modules/moment/locale/bn.js",
	"./bn-bd": "./node_modules/moment/locale/bn-bd.js",
	"./bn-bd.js": "./node_modules/moment/locale/bn-bd.js",
	"./bn.js": "./node_modules/moment/locale/bn.js",
	"./bo": "./node_modules/moment/locale/bo.js",
	"./bo.js": "./node_modules/moment/locale/bo.js",
	"./br": "./node_modules/moment/locale/br.js",
	"./br.js": "./node_modules/moment/locale/br.js",
	"./bs": "./node_modules/moment/locale/bs.js",
	"./bs.js": "./node_modules/moment/locale/bs.js",
	"./ca": "./node_modules/moment/locale/ca.js",
	"./ca.js": "./node_modules/moment/locale/ca.js",
	"./cs": "./node_modules/moment/locale/cs.js",
	"./cs.js": "./node_modules/moment/locale/cs.js",
	"./cv": "./node_modules/moment/locale/cv.js",
	"./cv.js": "./node_modules/moment/locale/cv.js",
	"./cy": "./node_modules/moment/locale/cy.js",
	"./cy.js": "./node_modules/moment/locale/cy.js",
	"./da": "./node_modules/moment/locale/da.js",
	"./da.js": "./node_modules/moment/locale/da.js",
	"./de": "./node_modules/moment/locale/de.js",
	"./de-at": "./node_modules/moment/locale/de-at.js",
	"./de-at.js": "./node_modules/moment/locale/de-at.js",
	"./de-ch": "./node_modules/moment/locale/de-ch.js",
	"./de-ch.js": "./node_modules/moment/locale/de-ch.js",
	"./de.js": "./node_modules/moment/locale/de.js",
	"./dv": "./node_modules/moment/locale/dv.js",
	"./dv.js": "./node_modules/moment/locale/dv.js",
	"./el": "./node_modules/moment/locale/el.js",
	"./el.js": "./node_modules/moment/locale/el.js",
	"./en-au": "./node_modules/moment/locale/en-au.js",
	"./en-au.js": "./node_modules/moment/locale/en-au.js",
	"./en-ca": "./node_modules/moment/locale/en-ca.js",
	"./en-ca.js": "./node_modules/moment/locale/en-ca.js",
	"./en-gb": "./node_modules/moment/locale/en-gb.js",
	"./en-gb.js": "./node_modules/moment/locale/en-gb.js",
	"./en-ie": "./node_modules/moment/locale/en-ie.js",
	"./en-ie.js": "./node_modules/moment/locale/en-ie.js",
	"./en-il": "./node_modules/moment/locale/en-il.js",
	"./en-il.js": "./node_modules/moment/locale/en-il.js",
	"./en-in": "./node_modules/moment/locale/en-in.js",
	"./en-in.js": "./node_modules/moment/locale/en-in.js",
	"./en-nz": "./node_modules/moment/locale/en-nz.js",
	"./en-nz.js": "./node_modules/moment/locale/en-nz.js",
	"./en-sg": "./node_modules/moment/locale/en-sg.js",
	"./en-sg.js": "./node_modules/moment/locale/en-sg.js",
	"./eo": "./node_modules/moment/locale/eo.js",
	"./eo.js": "./node_modules/moment/locale/eo.js",
	"./es": "./node_modules/moment/locale/es.js",
	"./es-do": "./node_modules/moment/locale/es-do.js",
	"./es-do.js": "./node_modules/moment/locale/es-do.js",
	"./es-mx": "./node_modules/moment/locale/es-mx.js",
	"./es-mx.js": "./node_modules/moment/locale/es-mx.js",
	"./es-us": "./node_modules/moment/locale/es-us.js",
	"./es-us.js": "./node_modules/moment/locale/es-us.js",
	"./es.js": "./node_modules/moment/locale/es.js",
	"./et": "./node_modules/moment/locale/et.js",
	"./et.js": "./node_modules/moment/locale/et.js",
	"./eu": "./node_modules/moment/locale/eu.js",
	"./eu.js": "./node_modules/moment/locale/eu.js",
	"./fa": "./node_modules/moment/locale/fa.js",
	"./fa.js": "./node_modules/moment/locale/fa.js",
	"./fi": "./node_modules/moment/locale/fi.js",
	"./fi.js": "./node_modules/moment/locale/fi.js",
	"./fil": "./node_modules/moment/locale/fil.js",
	"./fil.js": "./node_modules/moment/locale/fil.js",
	"./fo": "./node_modules/moment/locale/fo.js",
	"./fo.js": "./node_modules/moment/locale/fo.js",
	"./fr": "./node_modules/moment/locale/fr.js",
	"./fr-ca": "./node_modules/moment/locale/fr-ca.js",
	"./fr-ca.js": "./node_modules/moment/locale/fr-ca.js",
	"./fr-ch": "./node_modules/moment/locale/fr-ch.js",
	"./fr-ch.js": "./node_modules/moment/locale/fr-ch.js",
	"./fr.js": "./node_modules/moment/locale/fr.js",
	"./fy": "./node_modules/moment/locale/fy.js",
	"./fy.js": "./node_modules/moment/locale/fy.js",
	"./ga": "./node_modules/moment/locale/ga.js",
	"./ga.js": "./node_modules/moment/locale/ga.js",
	"./gd": "./node_modules/moment/locale/gd.js",
	"./gd.js": "./node_modules/moment/locale/gd.js",
	"./gl": "./node_modules/moment/locale/gl.js",
	"./gl.js": "./node_modules/moment/locale/gl.js",
	"./gom-deva": "./node_modules/moment/locale/gom-deva.js",
	"./gom-deva.js": "./node_modules/moment/locale/gom-deva.js",
	"./gom-latn": "./node_modules/moment/locale/gom-latn.js",
	"./gom-latn.js": "./node_modules/moment/locale/gom-latn.js",
	"./gu": "./node_modules/moment/locale/gu.js",
	"./gu.js": "./node_modules/moment/locale/gu.js",
	"./he": "./node_modules/moment/locale/he.js",
	"./he.js": "./node_modules/moment/locale/he.js",
	"./hi": "./node_modules/moment/locale/hi.js",
	"./hi.js": "./node_modules/moment/locale/hi.js",
	"./hr": "./node_modules/moment/locale/hr.js",
	"./hr.js": "./node_modules/moment/locale/hr.js",
	"./hu": "./node_modules/moment/locale/hu.js",
	"./hu.js": "./node_modules/moment/locale/hu.js",
	"./hy-am": "./node_modules/moment/locale/hy-am.js",
	"./hy-am.js": "./node_modules/moment/locale/hy-am.js",
	"./id": "./node_modules/moment/locale/id.js",
	"./id.js": "./node_modules/moment/locale/id.js",
	"./is": "./node_modules/moment/locale/is.js",
	"./is.js": "./node_modules/moment/locale/is.js",
	"./it": "./node_modules/moment/locale/it.js",
	"./it-ch": "./node_modules/moment/locale/it-ch.js",
	"./it-ch.js": "./node_modules/moment/locale/it-ch.js",
	"./it.js": "./node_modules/moment/locale/it.js",
	"./ja": "./node_modules/moment/locale/ja.js",
	"./ja.js": "./node_modules/moment/locale/ja.js",
	"./jv": "./node_modules/moment/locale/jv.js",
	"./jv.js": "./node_modules/moment/locale/jv.js",
	"./ka": "./node_modules/moment/locale/ka.js",
	"./ka.js": "./node_modules/moment/locale/ka.js",
	"./kk": "./node_modules/moment/locale/kk.js",
	"./kk.js": "./node_modules/moment/locale/kk.js",
	"./km": "./node_modules/moment/locale/km.js",
	"./km.js": "./node_modules/moment/locale/km.js",
	"./kn": "./node_modules/moment/locale/kn.js",
	"./kn.js": "./node_modules/moment/locale/kn.js",
	"./ko": "./node_modules/moment/locale/ko.js",
	"./ko.js": "./node_modules/moment/locale/ko.js",
	"./ku": "./node_modules/moment/locale/ku.js",
	"./ku.js": "./node_modules/moment/locale/ku.js",
	"./ky": "./node_modules/moment/locale/ky.js",
	"./ky.js": "./node_modules/moment/locale/ky.js",
	"./lb": "./node_modules/moment/locale/lb.js",
	"./lb.js": "./node_modules/moment/locale/lb.js",
	"./lo": "./node_modules/moment/locale/lo.js",
	"./lo.js": "./node_modules/moment/locale/lo.js",
	"./lt": "./node_modules/moment/locale/lt.js",
	"./lt.js": "./node_modules/moment/locale/lt.js",
	"./lv": "./node_modules/moment/locale/lv.js",
	"./lv.js": "./node_modules/moment/locale/lv.js",
	"./me": "./node_modules/moment/locale/me.js",
	"./me.js": "./node_modules/moment/locale/me.js",
	"./mi": "./node_modules/moment/locale/mi.js",
	"./mi.js": "./node_modules/moment/locale/mi.js",
	"./mk": "./node_modules/moment/locale/mk.js",
	"./mk.js": "./node_modules/moment/locale/mk.js",
	"./ml": "./node_modules/moment/locale/ml.js",
	"./ml.js": "./node_modules/moment/locale/ml.js",
	"./mn": "./node_modules/moment/locale/mn.js",
	"./mn.js": "./node_modules/moment/locale/mn.js",
	"./mr": "./node_modules/moment/locale/mr.js",
	"./mr.js": "./node_modules/moment/locale/mr.js",
	"./ms": "./node_modules/moment/locale/ms.js",
	"./ms-my": "./node_modules/moment/locale/ms-my.js",
	"./ms-my.js": "./node_modules/moment/locale/ms-my.js",
	"./ms.js": "./node_modules/moment/locale/ms.js",
	"./mt": "./node_modules/moment/locale/mt.js",
	"./mt.js": "./node_modules/moment/locale/mt.js",
	"./my": "./node_modules/moment/locale/my.js",
	"./my.js": "./node_modules/moment/locale/my.js",
	"./nb": "./node_modules/moment/locale/nb.js",
	"./nb.js": "./node_modules/moment/locale/nb.js",
	"./ne": "./node_modules/moment/locale/ne.js",
	"./ne.js": "./node_modules/moment/locale/ne.js",
	"./nl": "./node_modules/moment/locale/nl.js",
	"./nl-be": "./node_modules/moment/locale/nl-be.js",
	"./nl-be.js": "./node_modules/moment/locale/nl-be.js",
	"./nl.js": "./node_modules/moment/locale/nl.js",
	"./nn": "./node_modules/moment/locale/nn.js",
	"./nn.js": "./node_modules/moment/locale/nn.js",
	"./oc-lnc": "./node_modules/moment/locale/oc-lnc.js",
	"./oc-lnc.js": "./node_modules/moment/locale/oc-lnc.js",
	"./pa-in": "./node_modules/moment/locale/pa-in.js",
	"./pa-in.js": "./node_modules/moment/locale/pa-in.js",
	"./pl": "./node_modules/moment/locale/pl.js",
	"./pl.js": "./node_modules/moment/locale/pl.js",
	"./pt": "./node_modules/moment/locale/pt.js",
	"./pt-br": "./node_modules/moment/locale/pt-br.js",
	"./pt-br.js": "./node_modules/moment/locale/pt-br.js",
	"./pt.js": "./node_modules/moment/locale/pt.js",
	"./ro": "./node_modules/moment/locale/ro.js",
	"./ro.js": "./node_modules/moment/locale/ro.js",
	"./ru": "./node_modules/moment/locale/ru.js",
	"./ru.js": "./node_modules/moment/locale/ru.js",
	"./sd": "./node_modules/moment/locale/sd.js",
	"./sd.js": "./node_modules/moment/locale/sd.js",
	"./se": "./node_modules/moment/locale/se.js",
	"./se.js": "./node_modules/moment/locale/se.js",
	"./si": "./node_modules/moment/locale/si.js",
	"./si.js": "./node_modules/moment/locale/si.js",
	"./sk": "./node_modules/moment/locale/sk.js",
	"./sk.js": "./node_modules/moment/locale/sk.js",
	"./sl": "./node_modules/moment/locale/sl.js",
	"./sl.js": "./node_modules/moment/locale/sl.js",
	"./sq": "./node_modules/moment/locale/sq.js",
	"./sq.js": "./node_modules/moment/locale/sq.js",
	"./sr": "./node_modules/moment/locale/sr.js",
	"./sr-cyrl": "./node_modules/moment/locale/sr-cyrl.js",
	"./sr-cyrl.js": "./node_modules/moment/locale/sr-cyrl.js",
	"./sr.js": "./node_modules/moment/locale/sr.js",
	"./ss": "./node_modules/moment/locale/ss.js",
	"./ss.js": "./node_modules/moment/locale/ss.js",
	"./sv": "./node_modules/moment/locale/sv.js",
	"./sv.js": "./node_modules/moment/locale/sv.js",
	"./sw": "./node_modules/moment/locale/sw.js",
	"./sw.js": "./node_modules/moment/locale/sw.js",
	"./ta": "./node_modules/moment/locale/ta.js",
	"./ta.js": "./node_modules/moment/locale/ta.js",
	"./te": "./node_modules/moment/locale/te.js",
	"./te.js": "./node_modules/moment/locale/te.js",
	"./tet": "./node_modules/moment/locale/tet.js",
	"./tet.js": "./node_modules/moment/locale/tet.js",
	"./tg": "./node_modules/moment/locale/tg.js",
	"./tg.js": "./node_modules/moment/locale/tg.js",
	"./th": "./node_modules/moment/locale/th.js",
	"./th.js": "./node_modules/moment/locale/th.js",
	"./tk": "./node_modules/moment/locale/tk.js",
	"./tk.js": "./node_modules/moment/locale/tk.js",
	"./tl-ph": "./node_modules/moment/locale/tl-ph.js",
	"./tl-ph.js": "./node_modules/moment/locale/tl-ph.js",
	"./tlh": "./node_modules/moment/locale/tlh.js",
	"./tlh.js": "./node_modules/moment/locale/tlh.js",
	"./tr": "./node_modules/moment/locale/tr.js",
	"./tr.js": "./node_modules/moment/locale/tr.js",
	"./tzl": "./node_modules/moment/locale/tzl.js",
	"./tzl.js": "./node_modules/moment/locale/tzl.js",
	"./tzm": "./node_modules/moment/locale/tzm.js",
	"./tzm-latn": "./node_modules/moment/locale/tzm-latn.js",
	"./tzm-latn.js": "./node_modules/moment/locale/tzm-latn.js",
	"./tzm.js": "./node_modules/moment/locale/tzm.js",
	"./ug-cn": "./node_modules/moment/locale/ug-cn.js",
	"./ug-cn.js": "./node_modules/moment/locale/ug-cn.js",
	"./uk": "./node_modules/moment/locale/uk.js",
	"./uk.js": "./node_modules/moment/locale/uk.js",
	"./ur": "./node_modules/moment/locale/ur.js",
	"./ur.js": "./node_modules/moment/locale/ur.js",
	"./uz": "./node_modules/moment/locale/uz.js",
	"./uz-latn": "./node_modules/moment/locale/uz-latn.js",
	"./uz-latn.js": "./node_modules/moment/locale/uz-latn.js",
	"./uz.js": "./node_modules/moment/locale/uz.js",
	"./vi": "./node_modules/moment/locale/vi.js",
	"./vi.js": "./node_modules/moment/locale/vi.js",
	"./x-pseudo": "./node_modules/moment/locale/x-pseudo.js",
	"./x-pseudo.js": "./node_modules/moment/locale/x-pseudo.js",
	"./yo": "./node_modules/moment/locale/yo.js",
	"./yo.js": "./node_modules/moment/locale/yo.js",
	"./zh-cn": "./node_modules/moment/locale/zh-cn.js",
	"./zh-cn.js": "./node_modules/moment/locale/zh-cn.js",
	"./zh-hk": "./node_modules/moment/locale/zh-hk.js",
	"./zh-hk.js": "./node_modules/moment/locale/zh-hk.js",
	"./zh-mo": "./node_modules/moment/locale/zh-mo.js",
	"./zh-mo.js": "./node_modules/moment/locale/zh-mo.js",
	"./zh-tw": "./node_modules/moment/locale/zh-tw.js",
	"./zh-tw.js": "./node_modules/moment/locale/zh-tw.js"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./node_modules/moment/locale sync recursive ^\\.\\/.*$";

/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Dashboard.vue?vue&type=style&index=0&lang=css&":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/Dashboard.vue?vue&type=style&index=0&lang=css& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/css-loader??ref--6-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--6-2!../../../node_modules/vue-loader/lib??vue-loader-options!./Dashboard.vue?vue&type=style&index=0&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Dashboard.vue?vue&type=style&index=0&lang=css&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/RegularTables.vue?vue&type=style&index=0&lang=css&":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/RegularTables.vue?vue&type=style&index=0&lang=css& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/css-loader??ref--6-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--6-2!../../../node_modules/vue-loader/lib??vue-loader-options!./RegularTables.vue?vue&type=style&index=0&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/RegularTables.vue?vue&type=style&index=0&lang=css&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Dashboard.vue?vue&type=template&id=1f79daf6&":
/*!*******************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/Dashboard.vue?vue&type=template&id=1f79daf6& ***!
  \*******************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    [
      _c(
        "base-header",
        { staticClass: "pb-6 pb-8 pt-5 pt-md-8 bg-gradient-success" },
        [
          _c(
            "b-row",
            [
              _c(
                "b-col",
                { attrs: { xl: "3", md: "6" } },
                [
                  _c(
                    "stats-card",
                    {
                      staticClass: "mb-4",
                      attrs: {
                        title: "Total traffic",
                        type: "gradient-red",
                        "sub-title": "350,897",
                        icon: "ni ni-active-40"
                      }
                    },
                    [
                      _c("template", { slot: "footer" }, [
                        _c("span", { staticClass: "text-success mr-2" }, [
                          _vm._v("3.48%")
                        ]),
                        _vm._v(" "),
                        _c("span", { staticClass: "text-nowrap" }, [
                          _vm._v("Since last month")
                        ])
                      ])
                    ],
                    2
                  )
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "b-col",
                { attrs: { xl: "3", md: "6" } },
                [
                  _c(
                    "stats-card",
                    {
                      staticClass: "mb-4",
                      attrs: {
                        title: "Total traffic",
                        type: "gradient-orange",
                        "sub-title": "2,356",
                        icon: "ni ni-chart-pie-35"
                      }
                    },
                    [
                      _c("template", { slot: "footer" }, [
                        _c("span", { staticClass: "text-success mr-2" }, [
                          _vm._v("12.18%")
                        ]),
                        _vm._v(" "),
                        _c("span", { staticClass: "text-nowrap" }, [
                          _vm._v("Since last month")
                        ])
                      ])
                    ],
                    2
                  )
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "b-col",
                { attrs: { xl: "3", md: "6" } },
                [
                  _c(
                    "stats-card",
                    {
                      staticClass: "mb-4",
                      attrs: {
                        title: "Sales",
                        type: "gradient-green",
                        "sub-title": "924",
                        icon: "ni ni-money-coins"
                      }
                    },
                    [
                      _c("template", { slot: "footer" }, [
                        _c("span", { staticClass: "text-danger mr-2" }, [
                          _vm._v("5.72%")
                        ]),
                        _vm._v(" "),
                        _c("span", { staticClass: "text-nowrap" }, [
                          _vm._v("Since last month")
                        ])
                      ])
                    ],
                    2
                  )
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "b-col",
                { attrs: { xl: "3", md: "6" } },
                [
                  _c(
                    "stats-card",
                    {
                      staticClass: "mb-4",
                      attrs: {
                        title: "Performance",
                        type: "gradient-info",
                        "sub-title": "49,65%",
                        icon: "ni ni-chart-bar-32"
                      }
                    },
                    [
                      _c("template", { slot: "footer" }, [
                        _c("span", { staticClass: "text-success mr-2" }, [
                          _vm._v("54.8%")
                        ]),
                        _vm._v(" "),
                        _c("span", { staticClass: "text-nowrap" }, [
                          _vm._v("Since last month")
                        ])
                      ])
                    ],
                    2
                  )
                ],
                1
              )
            ],
            1
          )
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "b-container",
        { staticClass: "mt--7", attrs: { fluid: "" } },
        [
          _c(
            "b-row",
            [
              _c(
                "b-col",
                { staticClass: "mb-5 mb-xl-0", attrs: { xl: "8" } },
                [
                  _c(
                    "card",
                    {
                      attrs: {
                        type: "default",
                        "header-classes": "bg-transparent"
                      }
                    },
                    [
                      _c(
                        "b-row",
                        {
                          attrs: { slot: "header", "align-v": "center" },
                          slot: "header"
                        },
                        [
                          _c("b-col", [
                            _c(
                              "h6",
                              {
                                staticClass:
                                  "text-light text-uppercase ls-1 mb-1"
                              },
                              [_vm._v("Overview")]
                            ),
                            _vm._v(" "),
                            _c("h5", { staticClass: "h3 text-white mb-0" }, [
                              _vm._v("Sales value")
                            ])
                          ]),
                          _vm._v(" "),
                          _c(
                            "b-col",
                            [
                              _c(
                                "b-nav",
                                {
                                  staticClass: "nav-pills justify-content-end"
                                },
                                [
                                  _c(
                                    "b-nav-item",
                                    {
                                      staticClass: "mr-2 mr-md-0",
                                      attrs: {
                                        active:
                                          _vm.bigLineChart.activeIndex === 0,
                                        "link-classes": "py-2 px-3"
                                      },
                                      on: {
                                        click: function($event) {
                                          $event.preventDefault()
                                          return _vm.initBigChart(0)
                                        }
                                      }
                                    },
                                    [
                                      _c(
                                        "span",
                                        { staticClass: "d-none d-md-block" },
                                        [_vm._v("Month")]
                                      ),
                                      _vm._v(" "),
                                      _c("span", { staticClass: "d-md-none" }, [
                                        _vm._v("M")
                                      ])
                                    ]
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "b-nav-item",
                                    {
                                      attrs: {
                                        "link-classes": "py-2 px-3",
                                        active:
                                          _vm.bigLineChart.activeIndex === 1
                                      },
                                      on: {
                                        click: function($event) {
                                          $event.preventDefault()
                                          return _vm.initBigChart(1)
                                        }
                                      }
                                    },
                                    [
                                      _c(
                                        "span",
                                        { staticClass: "d-none d-md-block" },
                                        [_vm._v("Week")]
                                      ),
                                      _vm._v(" "),
                                      _c("span", { staticClass: "d-md-none" }, [
                                        _vm._v("W")
                                      ])
                                    ]
                                  )
                                ],
                                1
                              )
                            ],
                            1
                          )
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c("line-chart", {
                        ref: "bigChart",
                        attrs: {
                          height: 350,
                          "chart-data": _vm.bigLineChart.chartData,
                          "extra-options": _vm.bigLineChart.extraOptions
                        }
                      })
                    ],
                    1
                  )
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "b-col",
                { staticClass: "mb-5 mb-xl-0", attrs: { xl: "4" } },
                [
                  _c(
                    "card",
                    { attrs: { "header-classes": "bg-transparent" } },
                    [
                      _c(
                        "b-row",
                        {
                          attrs: { slot: "header", "align-v": "center" },
                          slot: "header"
                        },
                        [
                          _c("b-col", [
                            _c(
                              "h6",
                              {
                                staticClass:
                                  "text-uppercase text-muted ls-1 mb-1"
                              },
                              [_vm._v("Performance")]
                            ),
                            _vm._v(" "),
                            _c("h5", { staticClass: "h3 mb-0" }, [
                              _vm._v("Total orders")
                            ])
                          ])
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c("bar-chart", {
                        ref: "barChart",
                        attrs: {
                          height: 350,
                          "chart-data": _vm.redBarChart.chartData
                        }
                      })
                    ],
                    1
                  )
                ],
                1
              )
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "b-row",
            { staticClass: "mt-5" },
            [
              _c(
                "b-col",
                { staticClass: "mb-5 mb-xl-0", attrs: { xl: "8" } },
                [_c("page-visits-table")],
                1
              ),
              _vm._v(" "),
              _c(
                "b-col",
                { staticClass: "mb-5 mb-xl-0", attrs: { xl: "4" } },
                [_c("social-traffic-table")],
                1
              )
            ],
            1
          )
        ],
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Dashboard/PageVisitsTable.vue?vue&type=template&id=425e7b26&":
/*!***********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/Dashboard/PageVisitsTable.vue?vue&type=template&id=425e7b26& ***!
  \***********************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "b-card",
    {
      attrs: { "body-class": "p-0", "header-class": "border-0" },
      scopedSlots: _vm._u([
        {
          key: "header",
          fn: function() {
            return [
              _c(
                "b-row",
                { attrs: { "align-v": "center" } },
                [
                  _c("b-col", [
                    _c("h3", { staticClass: "mb-0" }, [_vm._v("Page visits")])
                  ]),
                  _vm._v(" "),
                  _c("b-col", { staticClass: "text-right" }, [
                    _c(
                      "a",
                      {
                        staticClass: "btn btn-sm btn-primary",
                        attrs: { href: "#!" }
                      },
                      [_vm._v("See all")]
                    )
                  ])
                ],
                1
              )
            ]
          },
          proxy: true
        }
      ])
    },
    [
      _vm._v(" "),
      _c(
        "el-table",
        {
          staticClass: "table-responsive table",
          attrs: { data: _vm.tableData, "header-row-class-name": "thead-light" }
        },
        [
          _c("el-table-column", {
            attrs: { label: "Page name", "min-width": "130px", prop: "page" },
            scopedSlots: _vm._u([
              {
                key: "default",
                fn: function(ref) {
                  var row = ref.row
                  return [
                    _c("div", { staticClass: "font-weight-600" }, [
                      _vm._v(_vm._s(row.page))
                    ])
                  ]
                }
              }
            ])
          }),
          _vm._v(" "),
          _c("el-table-column", {
            attrs: { label: "Visitors", "min-width": "70px", prop: "visitors" }
          }),
          _vm._v(" "),
          _c("el-table-column", {
            attrs: {
              label: "Unique users",
              "min-width": "90px",
              prop: "unique"
            }
          }),
          _vm._v(" "),
          _c("el-table-column", {
            attrs: {
              label: "Bounce rate",
              "min-width": "90px",
              prop: "bounceRate"
            },
            scopedSlots: _vm._u([
              {
                key: "default",
                fn: function(ref) {
                  var row = ref.row
                  return [
                    _vm._v("\n        " + _vm._s(row.bounceRate) + "\n      ")
                  ]
                }
              }
            ])
          })
        ],
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Dashboard/SocialTrafficTable.vue?vue&type=template&id=66e6ad10&":
/*!**************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/Dashboard/SocialTrafficTable.vue?vue&type=template&id=66e6ad10& ***!
  \**************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "b-card",
    {
      attrs: { "body-class": "p-0", "header-class": "border-0" },
      scopedSlots: _vm._u([
        {
          key: "header",
          fn: function() {
            return [
              _c(
                "b-row",
                { attrs: { "align-v": "center" } },
                [
                  _c("b-col", [
                    _c("h3", { staticClass: "mb-0" }, [
                      _vm._v("Social traffic")
                    ])
                  ]),
                  _vm._v(" "),
                  _c(
                    "b-col",
                    { staticClass: "text-right" },
                    [
                      _c(
                        "base-button",
                        { attrs: { size: "sm", type: "primary" } },
                        [_vm._v("See all")]
                      )
                    ],
                    1
                  )
                ],
                1
              )
            ]
          },
          proxy: true
        }
      ])
    },
    [
      _vm._v(" "),
      _c(
        "el-table",
        {
          staticClass: "table-responsive table",
          attrs: { data: _vm.tableData, "header-row-class-name": "thead-light" }
        },
        [
          _c("el-table-column", {
            attrs: { label: "Referral", "min-width": "115px", prop: "name" },
            scopedSlots: _vm._u([
              {
                key: "default",
                fn: function(ref) {
                  var row = ref.row
                  return [
                    _c("div", { staticClass: "font-weight-600" }, [
                      _vm._v(_vm._s(row.name))
                    ])
                  ]
                }
              }
            ])
          }),
          _vm._v(" "),
          _c("el-table-column", {
            attrs: { label: "Visitors", "min-width": "110px", prop: "visitors" }
          }),
          _vm._v(" "),
          _c("el-table-column", {
            attrs: { "min-width": "220px", prop: "progress" },
            scopedSlots: _vm._u([
              {
                key: "default",
                fn: function(ref) {
                  var row = ref.row
                  return [
                    _c(
                      "div",
                      { staticClass: "d-flex align-items-center" },
                      [
                        _c("span", { staticClass: "mr-2" }, [
                          _vm._v(_vm._s(row.progress) + "%")
                        ]),
                        _vm._v(" "),
                        _c("base-progress", {
                          attrs: { type: row.progressType, value: row.progress }
                        })
                      ],
                      1
                    )
                  ]
                }
              }
            ])
          })
        ],
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/GoogleMaps.vue?vue&type=template&id=4cae1acf&":
/*!********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/GoogleMaps.vue?vue&type=template&id=4cae1acf& ***!
  \********************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    [
      _c(
        "base-header",
        { staticClass: "pb-6 pb-8 pt-5 pt-md-8 bg-gradient-success" },
        [
          _c(
            "b-row",
            [
              _c(
                "b-col",
                { attrs: { xl: "3", md: "6" } },
                [
                  _c(
                    "stats-card",
                    {
                      staticClass: "mb-4",
                      attrs: {
                        title: "Total traffic",
                        type: "gradient-red",
                        "sub-title": "350,897",
                        icon: "ni ni-active-40"
                      }
                    },
                    [
                      _c("template", { slot: "footer" }, [
                        _c("span", { staticClass: "text-success mr-2" }, [
                          _vm._v("3.48%")
                        ]),
                        _vm._v(" "),
                        _c("span", { staticClass: "text-nowrap" }, [
                          _vm._v("Since last month")
                        ])
                      ])
                    ],
                    2
                  )
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "b-col",
                { attrs: { xl: "3", md: "6" } },
                [
                  _c(
                    "stats-card",
                    {
                      staticClass: "mb-4",
                      attrs: {
                        title: "Total traffic",
                        type: "gradient-orange",
                        "sub-title": "2,356",
                        icon: "ni ni-chart-pie-35"
                      }
                    },
                    [
                      _c("template", { slot: "footer" }, [
                        _c("span", { staticClass: "text-success mr-2" }, [
                          _vm._v("12.18%")
                        ]),
                        _vm._v(" "),
                        _c("span", { staticClass: "text-nowrap" }, [
                          _vm._v("Since last month")
                        ])
                      ])
                    ],
                    2
                  )
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "b-col",
                { attrs: { xl: "3", md: "6" } },
                [
                  _c(
                    "stats-card",
                    {
                      staticClass: "mb-4",
                      attrs: {
                        title: "Sales",
                        type: "gradient-green",
                        "sub-title": "924",
                        icon: "ni ni-money-coins"
                      }
                    },
                    [
                      _c("template", { slot: "footer" }, [
                        _c("span", { staticClass: "text-danger mr-2" }, [
                          _vm._v("5.72%")
                        ]),
                        _vm._v(" "),
                        _c("span", { staticClass: "text-nowrap" }, [
                          _vm._v("Since last month")
                        ])
                      ])
                    ],
                    2
                  )
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "b-col",
                { attrs: { xl: "3", md: "6" } },
                [
                  _c(
                    "stats-card",
                    {
                      staticClass: "mb-4",
                      attrs: {
                        title: "Performance",
                        type: "gradient-info",
                        "sub-title": "49,65%",
                        icon: "ni ni-chart-bar-32"
                      }
                    },
                    [
                      _c("template", { slot: "footer" }, [
                        _c("span", { staticClass: "text-success mr-2" }, [
                          _vm._v("54.8%")
                        ]),
                        _vm._v(" "),
                        _c("span", { staticClass: "text-nowrap" }, [
                          _vm._v("Since last month")
                        ])
                      ])
                    ],
                    2
                  )
                ],
                1
              )
            ],
            1
          )
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "b-container",
        { staticClass: "mt--7", attrs: { fluid: "" } },
        [
          _c(
            "b-row",
            [
              _c(
                "b-col",
                [
                  _c(
                    "b-card",
                    { staticClass: "border-0", attrs: { "no-body": "" } },
                    [
                      _c("div", {
                        staticClass: "map-canvas",
                        staticStyle: { height: "600px" },
                        attrs: { id: "map-custom" }
                      })
                    ]
                  )
                ],
                1
              )
            ],
            1
          )
        ],
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Icons.vue?vue&type=template&id=279a5c8b&":
/*!***************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/Icons.vue?vue&type=template&id=279a5c8b& ***!
  \***************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    [
      _c(
        "base-header",
        { staticClass: "pb-6 pb-8 pt-5 pt-md-8 bg-gradient-success" },
        [
          _c(
            "b-row",
            [
              _c(
                "b-col",
                { attrs: { xl: "3", md: "6" } },
                [
                  _c(
                    "stats-card",
                    {
                      staticClass: "mb-4",
                      attrs: {
                        title: "Total traffic",
                        type: "gradient-red",
                        "sub-title": "350,897",
                        icon: "ni ni-active-40"
                      }
                    },
                    [
                      _c("template", { slot: "footer" }, [
                        _c("span", { staticClass: "text-success mr-2" }, [
                          _vm._v("3.48%")
                        ]),
                        _vm._v(" "),
                        _c("span", { staticClass: "text-nowrap" }, [
                          _vm._v("Since last month")
                        ])
                      ])
                    ],
                    2
                  )
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "b-col",
                { attrs: { xl: "3", md: "6" } },
                [
                  _c(
                    "stats-card",
                    {
                      staticClass: "mb-4",
                      attrs: {
                        title: "Total traffic",
                        type: "gradient-orange",
                        "sub-title": "2,356",
                        icon: "ni ni-chart-pie-35"
                      }
                    },
                    [
                      _c("template", { slot: "footer" }, [
                        _c("span", { staticClass: "text-success mr-2" }, [
                          _vm._v("12.18%")
                        ]),
                        _vm._v(" "),
                        _c("span", { staticClass: "text-nowrap" }, [
                          _vm._v("Since last month")
                        ])
                      ])
                    ],
                    2
                  )
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "b-col",
                { attrs: { xl: "3", md: "6" } },
                [
                  _c(
                    "stats-card",
                    {
                      staticClass: "mb-4",
                      attrs: {
                        title: "Sales",
                        type: "gradient-green",
                        "sub-title": "924",
                        icon: "ni ni-money-coins"
                      }
                    },
                    [
                      _c("template", { slot: "footer" }, [
                        _c("span", { staticClass: "text-danger mr-2" }, [
                          _vm._v("5.72%")
                        ]),
                        _vm._v(" "),
                        _c("span", { staticClass: "text-nowrap" }, [
                          _vm._v("Since last month")
                        ])
                      ])
                    ],
                    2
                  )
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "b-col",
                { attrs: { xl: "3", md: "6" } },
                [
                  _c(
                    "stats-card",
                    {
                      staticClass: "mb-4",
                      attrs: {
                        title: "Performance",
                        type: "gradient-info",
                        "sub-title": "49,65%",
                        icon: "ni ni-chart-bar-32"
                      }
                    },
                    [
                      _c("template", { slot: "footer" }, [
                        _c("span", { staticClass: "text-success mr-2" }, [
                          _vm._v("54.8%")
                        ]),
                        _vm._v(" "),
                        _c("span", { staticClass: "text-nowrap" }, [
                          _vm._v("Since last month")
                        ])
                      ])
                    ],
                    2
                  )
                ],
                1
              )
            ],
            1
          )
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "b-container",
        { staticClass: "mt--7", attrs: { fluid: "" } },
        [
          _c(
            "b-row",
            { staticClass: "justify-content-center" },
            [
              _c(
                "b-col",
                { attrs: { lg: "12" } },
                [
                  _c(
                    "card",
                    { attrs: { "header-classes": "bg-transparent" } },
                    [
                      _c(
                        "h3",
                        {
                          staticClass: "mb-0",
                          attrs: { slot: "header" },
                          slot: "header"
                        },
                        [_vm._v("Icons")]
                      ),
                      _vm._v(" "),
                      _c(
                        "b-row",
                        { staticClass: "icon-examples" },
                        [
                          _c("b-col", { attrs: { lg: "3", md: "6" } }, [
                            _c(
                              "button",
                              {
                                directives: [
                                  {
                                    name: "clipboard",
                                    rawName: "v-clipboard:copy",
                                    value: "ni ni-active-40",
                                    expression: "'ni ni-active-40'",
                                    arg: "copy"
                                  },
                                  {
                                    name: "clipboard",
                                    rawName: "v-clipboard:success",
                                    value: _vm.onCopy,
                                    expression: "onCopy",
                                    arg: "success"
                                  }
                                ],
                                staticClass: "btn-icon-clipboard",
                                attrs: {
                                  type: "button",
                                  title: "",
                                  "data-original-title": "Copy to clipboard"
                                }
                              },
                              [
                                _c("div", [
                                  _c("i", { staticClass: "ni ni-active-40" }),
                                  _vm._v(" "),
                                  _c("span", [_vm._v("active-40")])
                                ])
                              ]
                            )
                          ]),
                          _vm._v(" "),
                          _c("b-col", { attrs: { lg: "3", md: "6" } }, [
                            _c(
                              "button",
                              {
                                directives: [
                                  {
                                    name: "clipboard",
                                    rawName: "v-clipboard:copy",
                                    value: "ni ni-air-baloon",
                                    expression: "'ni ni-air-baloon'",
                                    arg: "copy"
                                  },
                                  {
                                    name: "clipboard",
                                    rawName: "v-clipboard:success",
                                    value: _vm.onCopy,
                                    expression: "onCopy",
                                    arg: "success"
                                  }
                                ],
                                staticClass: "btn-icon-clipboard",
                                attrs: {
                                  type: "button",
                                  title: "",
                                  "data-original-title": "Copy to clipboard"
                                }
                              },
                              [
                                _c("div", [
                                  _c("i", { staticClass: "ni ni-air-baloon" }),
                                  _vm._v(" "),
                                  _c("span", [_vm._v("air-baloon")])
                                ])
                              ]
                            )
                          ]),
                          _vm._v(" "),
                          _c("b-col", { attrs: { lg: "3", md: "6" } }, [
                            _c(
                              "button",
                              {
                                directives: [
                                  {
                                    name: "clipboard",
                                    rawName: "v-clipboard:copy",
                                    value: "ni ni-album-2",
                                    expression: "'ni ni-album-2'",
                                    arg: "copy"
                                  },
                                  {
                                    name: "clipboard",
                                    rawName: "v-clipboard:success",
                                    value: _vm.onCopy,
                                    expression: "onCopy",
                                    arg: "success"
                                  }
                                ],
                                staticClass: "btn-icon-clipboard",
                                attrs: {
                                  type: "button",
                                  title: "",
                                  "data-original-title": "Copy to clipboard"
                                }
                              },
                              [
                                _c("div", [
                                  _c("i", { staticClass: "ni ni-album-2" }),
                                  _vm._v(" "),
                                  _c("span", [_vm._v("album-2")])
                                ])
                              ]
                            )
                          ]),
                          _vm._v(" "),
                          _c("b-col", { attrs: { lg: "3", md: "6" } }, [
                            _c(
                              "button",
                              {
                                directives: [
                                  {
                                    name: "clipboard",
                                    rawName: "v-clipboard:copy",
                                    value: "ni ni-align-center",
                                    expression: "'ni ni-align-center'",
                                    arg: "copy"
                                  },
                                  {
                                    name: "clipboard",
                                    rawName: "v-clipboard:success",
                                    value: _vm.onCopy,
                                    expression: "onCopy",
                                    arg: "success"
                                  }
                                ],
                                staticClass: "btn-icon-clipboard",
                                attrs: {
                                  type: "button",
                                  title: "",
                                  "data-original-title": "Copy to clipboard"
                                }
                              },
                              [
                                _c("div", [
                                  _c("i", {
                                    staticClass: "ni ni-align-center"
                                  }),
                                  _vm._v(" "),
                                  _c("span", [_vm._v("align-center")])
                                ])
                              ]
                            )
                          ]),
                          _vm._v(" "),
                          _c("b-col", { attrs: { lg: "3", md: "6" } }, [
                            _c(
                              "button",
                              {
                                directives: [
                                  {
                                    name: "clipboard",
                                    rawName: "v-clipboard:copy",
                                    value: "ni ni-align-left-2",
                                    expression: "'ni ni-align-left-2'",
                                    arg: "copy"
                                  },
                                  {
                                    name: "clipboard",
                                    rawName: "v-clipboard:success",
                                    value: _vm.onCopy,
                                    expression: "onCopy",
                                    arg: "success"
                                  }
                                ],
                                staticClass: "btn-icon-clipboard",
                                attrs: {
                                  type: "button",
                                  title: "",
                                  "data-original-title": "Copy to clipboard"
                                }
                              },
                              [
                                _c("div", [
                                  _c("i", {
                                    staticClass: "ni ni-align-left-2"
                                  }),
                                  _vm._v(" "),
                                  _c("span", [_vm._v("align-left-2")])
                                ])
                              ]
                            )
                          ]),
                          _vm._v(" "),
                          _c("b-col", { attrs: { lg: "3", md: "6" } }, [
                            _c(
                              "button",
                              {
                                directives: [
                                  {
                                    name: "clipboard",
                                    rawName: "v-clipboard:copy",
                                    value: "ni ni-ambulance",
                                    expression: "'ni ni-ambulance'",
                                    arg: "copy"
                                  },
                                  {
                                    name: "clipboard",
                                    rawName: "v-clipboard:success",
                                    value: _vm.onCopy,
                                    expression: "onCopy",
                                    arg: "success"
                                  }
                                ],
                                staticClass: "btn-icon-clipboard",
                                attrs: {
                                  type: "button",
                                  title: "",
                                  "data-original-title": "Copy to clipboard"
                                }
                              },
                              [
                                _c("div", [
                                  _c("i", { staticClass: "ni ni-ambulance" }),
                                  _vm._v(" "),
                                  _c("span", [_vm._v("ambulance")])
                                ])
                              ]
                            )
                          ]),
                          _vm._v(" "),
                          _c("b-col", { attrs: { lg: "3", md: "6" } }, [
                            _c(
                              "button",
                              {
                                directives: [
                                  {
                                    name: "clipboard",
                                    rawName: "v-clipboard:copy",
                                    value: "ni ni-app",
                                    expression: "'ni ni-app'",
                                    arg: "copy"
                                  },
                                  {
                                    name: "clipboard",
                                    rawName: "v-clipboard:success",
                                    value: _vm.onCopy,
                                    expression: "onCopy",
                                    arg: "success"
                                  }
                                ],
                                staticClass: "btn-icon-clipboard",
                                attrs: {
                                  type: "button",
                                  title: "",
                                  "data-original-title": "Copy to clipboard"
                                }
                              },
                              [
                                _c("div", [
                                  _c("i", { staticClass: "ni ni-app" }),
                                  _vm._v(" "),
                                  _c("span", [_vm._v("app")])
                                ])
                              ]
                            )
                          ]),
                          _vm._v(" "),
                          _c("b-col", { attrs: { lg: "3", md: "6" } }, [
                            _c(
                              "button",
                              {
                                directives: [
                                  {
                                    name: "clipboard",
                                    rawName: "v-clipboard:copy",
                                    value: "ni ni-archive-2",
                                    expression: "'ni ni-archive-2'",
                                    arg: "copy"
                                  },
                                  {
                                    name: "clipboard",
                                    rawName: "v-clipboard:success",
                                    value: _vm.onCopy,
                                    expression: "onCopy",
                                    arg: "success"
                                  }
                                ],
                                staticClass: "btn-icon-clipboard",
                                attrs: {
                                  type: "button",
                                  title: "",
                                  "data-original-title": "Copy to clipboard"
                                }
                              },
                              [
                                _c("div", [
                                  _c("i", { staticClass: "ni ni-archive-2" }),
                                  _vm._v(" "),
                                  _c("span", [_vm._v("archive-2")])
                                ])
                              ]
                            )
                          ]),
                          _vm._v(" "),
                          _c("b-col", { attrs: { lg: "3", md: "6" } }, [
                            _c(
                              "button",
                              {
                                directives: [
                                  {
                                    name: "clipboard",
                                    rawName: "v-clipboard:copy",
                                    value: "ni ni-atom",
                                    expression: "'ni ni-atom'",
                                    arg: "copy"
                                  },
                                  {
                                    name: "clipboard",
                                    rawName: "v-clipboard:success",
                                    value: _vm.onCopy,
                                    expression: "onCopy",
                                    arg: "success"
                                  }
                                ],
                                staticClass: "btn-icon-clipboard",
                                attrs: {
                                  type: "button",
                                  title: "",
                                  "data-original-title": "Copy to clipboard"
                                }
                              },
                              [
                                _c("div", [
                                  _c("i", { staticClass: "ni ni-atom" }),
                                  _vm._v(" "),
                                  _c("span", [_vm._v("atom")])
                                ])
                              ]
                            )
                          ]),
                          _vm._v(" "),
                          _c("b-col", { attrs: { lg: "3", md: "6" } }, [
                            _c(
                              "button",
                              {
                                directives: [
                                  {
                                    name: "clipboard",
                                    rawName: "v-clipboard:copy",
                                    value: "ni ni-badge",
                                    expression: "'ni ni-badge'",
                                    arg: "copy"
                                  },
                                  {
                                    name: "clipboard",
                                    rawName: "v-clipboard:success",
                                    value: _vm.onCopy,
                                    expression: "onCopy",
                                    arg: "success"
                                  }
                                ],
                                staticClass: "btn-icon-clipboard",
                                attrs: {
                                  type: "button",
                                  title: "",
                                  "data-original-title": "Copy to clipboard"
                                }
                              },
                              [
                                _c("div", [
                                  _c("i", { staticClass: "ni ni-badge" }),
                                  _vm._v(" "),
                                  _c("span", [_vm._v("badge")])
                                ])
                              ]
                            )
                          ]),
                          _vm._v(" "),
                          _c("b-col", { attrs: { lg: "3", md: "6" } }, [
                            _c(
                              "button",
                              {
                                directives: [
                                  {
                                    name: "clipboard",
                                    rawName: "v-clipboard:copy",
                                    value: "ni ni-bag-17",
                                    expression: "'ni ni-bag-17'",
                                    arg: "copy"
                                  },
                                  {
                                    name: "clipboard",
                                    rawName: "v-clipboard:success",
                                    value: _vm.onCopy,
                                    expression: "onCopy",
                                    arg: "success"
                                  }
                                ],
                                staticClass: "btn-icon-clipboard",
                                attrs: {
                                  type: "button",
                                  title: "",
                                  "data-original-title": "Copy to clipboard"
                                }
                              },
                              [
                                _c("div", [
                                  _c("i", { staticClass: "ni ni-bag-17" }),
                                  _vm._v(" "),
                                  _c("span", [_vm._v("bag-17")])
                                ])
                              ]
                            )
                          ]),
                          _vm._v(" "),
                          _c("b-col", { attrs: { lg: "3", md: "6" } }, [
                            _c(
                              "button",
                              {
                                directives: [
                                  {
                                    name: "clipboard",
                                    rawName: "v-clipboard:copy",
                                    value: "ni ni-basket",
                                    expression: "'ni ni-basket'",
                                    arg: "copy"
                                  },
                                  {
                                    name: "clipboard",
                                    rawName: "v-clipboard:success",
                                    value: _vm.onCopy,
                                    expression: "onCopy",
                                    arg: "success"
                                  }
                                ],
                                staticClass: "btn-icon-clipboard",
                                attrs: {
                                  type: "button",
                                  title: "",
                                  "data-original-title": "Copy to clipboard"
                                }
                              },
                              [
                                _c("div", [
                                  _c("i", { staticClass: "ni ni-basket" }),
                                  _vm._v(" "),
                                  _c("span", [_vm._v("basket")])
                                ])
                              ]
                            )
                          ]),
                          _vm._v(" "),
                          _c("b-col", { attrs: { lg: "3", md: "6" } }, [
                            _c(
                              "button",
                              {
                                directives: [
                                  {
                                    name: "clipboard",
                                    rawName: "v-clipboard:copy",
                                    value: "ni ni-bell-55",
                                    expression: "'ni ni-bell-55'",
                                    arg: "copy"
                                  },
                                  {
                                    name: "clipboard",
                                    rawName: "v-clipboard:success",
                                    value: _vm.onCopy,
                                    expression: "onCopy",
                                    arg: "success"
                                  }
                                ],
                                staticClass: "btn-icon-clipboard",
                                attrs: {
                                  type: "button",
                                  title: "",
                                  "data-original-title": "Copy to clipboard"
                                }
                              },
                              [
                                _c("div", [
                                  _c("i", { staticClass: "ni ni-bell-55" }),
                                  _vm._v(" "),
                                  _c("span", [_vm._v("bell-55")])
                                ])
                              ]
                            )
                          ]),
                          _vm._v(" "),
                          _c("b-col", { attrs: { lg: "3", md: "6" } }, [
                            _c(
                              "button",
                              {
                                directives: [
                                  {
                                    name: "clipboard",
                                    rawName: "v-clipboard:copy",
                                    value: "ni ni-bold-down",
                                    expression: "'ni ni-bold-down'",
                                    arg: "copy"
                                  },
                                  {
                                    name: "clipboard",
                                    rawName: "v-clipboard:success",
                                    value: _vm.onCopy,
                                    expression: "onCopy",
                                    arg: "success"
                                  }
                                ],
                                staticClass: "btn-icon-clipboard",
                                attrs: {
                                  type: "button",
                                  title: "",
                                  "data-original-title": "Copy to clipboard"
                                }
                              },
                              [
                                _c("div", [
                                  _c("i", { staticClass: "ni ni-bold-down" }),
                                  _vm._v(" "),
                                  _c("span", [_vm._v("bold-down")])
                                ])
                              ]
                            )
                          ]),
                          _vm._v(" "),
                          _c("b-col", { attrs: { lg: "3", md: "6" } }, [
                            _c(
                              "button",
                              {
                                directives: [
                                  {
                                    name: "clipboard",
                                    rawName: "v-clipboard:copy",
                                    value: "ni ni-bold-left",
                                    expression: "'ni ni-bold-left'",
                                    arg: "copy"
                                  },
                                  {
                                    name: "clipboard",
                                    rawName: "v-clipboard:success",
                                    value: _vm.onCopy,
                                    expression: "onCopy",
                                    arg: "success"
                                  }
                                ],
                                staticClass: "btn-icon-clipboard",
                                attrs: {
                                  type: "button",
                                  title: "",
                                  "data-original-title": "Copy to clipboard"
                                }
                              },
                              [
                                _c("div", [
                                  _c("i", { staticClass: "ni ni-bold-left" }),
                                  _vm._v(" "),
                                  _c("span", [_vm._v("bold-left")])
                                ])
                              ]
                            )
                          ]),
                          _vm._v(" "),
                          _c("b-col", { attrs: { lg: "3", md: "6" } }, [
                            _c(
                              "button",
                              {
                                directives: [
                                  {
                                    name: "clipboard",
                                    rawName: "v-clipboard:copy",
                                    value: "ni ni-bold-right",
                                    expression: "'ni ni-bold-right'",
                                    arg: "copy"
                                  },
                                  {
                                    name: "clipboard",
                                    rawName: "v-clipboard:success",
                                    value: _vm.onCopy,
                                    expression: "onCopy",
                                    arg: "success"
                                  }
                                ],
                                staticClass: "btn-icon-clipboard",
                                attrs: {
                                  type: "button",
                                  title: "",
                                  "data-original-title": "Copy to clipboard"
                                }
                              },
                              [
                                _c("div", [
                                  _c("i", { staticClass: "ni ni-bold-right" }),
                                  _vm._v(" "),
                                  _c("span", [_vm._v("bold-right")])
                                ])
                              ]
                            )
                          ]),
                          _vm._v(" "),
                          _c("b-col", { attrs: { lg: "3", md: "6" } }, [
                            _c(
                              "button",
                              {
                                directives: [
                                  {
                                    name: "clipboard",
                                    rawName: "v-clipboard:copy",
                                    value: "ni ni-bold-up",
                                    expression: "'ni ni-bold-up'",
                                    arg: "copy"
                                  },
                                  {
                                    name: "clipboard",
                                    rawName: "v-clipboard:success",
                                    value: _vm.onCopy,
                                    expression: "onCopy",
                                    arg: "success"
                                  }
                                ],
                                staticClass: "btn-icon-clipboard",
                                attrs: {
                                  type: "button",
                                  title: "",
                                  "data-original-title": "Copy to clipboard"
                                }
                              },
                              [
                                _c("div", [
                                  _c("i", { staticClass: "ni ni-bold-up" }),
                                  _vm._v(" "),
                                  _c("span", [_vm._v("bold-up")])
                                ])
                              ]
                            )
                          ]),
                          _vm._v(" "),
                          _c("b-col", { attrs: { lg: "3", md: "6" } }, [
                            _c(
                              "button",
                              {
                                directives: [
                                  {
                                    name: "clipboard",
                                    rawName: "v-clipboard:copy",
                                    value: "ni ni-bold",
                                    expression: "'ni ni-bold'",
                                    arg: "copy"
                                  },
                                  {
                                    name: "clipboard",
                                    rawName: "v-clipboard:success",
                                    value: _vm.onCopy,
                                    expression: "onCopy",
                                    arg: "success"
                                  }
                                ],
                                staticClass: "btn-icon-clipboard",
                                attrs: {
                                  type: "button",
                                  title: "",
                                  "data-original-title": "Copy to clipboard"
                                }
                              },
                              [
                                _c("div", [
                                  _c("i", { staticClass: "ni ni-bold" }),
                                  _vm._v(" "),
                                  _c("span", [_vm._v("bold")])
                                ])
                              ]
                            )
                          ]),
                          _vm._v(" "),
                          _c("b-col", { attrs: { lg: "3", md: "6" } }, [
                            _c(
                              "button",
                              {
                                directives: [
                                  {
                                    name: "clipboard",
                                    rawName: "v-clipboard:copy",
                                    value: "ni ni-book-bookmark",
                                    expression: "'ni ni-book-bookmark'",
                                    arg: "copy"
                                  },
                                  {
                                    name: "clipboard",
                                    rawName: "v-clipboard:success",
                                    value: _vm.onCopy,
                                    expression: "onCopy",
                                    arg: "success"
                                  }
                                ],
                                staticClass: "btn-icon-clipboard",
                                attrs: {
                                  type: "button",
                                  title: "",
                                  "data-original-title": "Copy to clipboard"
                                }
                              },
                              [
                                _c("div", [
                                  _c("i", {
                                    staticClass: "ni ni-book-bookmark"
                                  }),
                                  _vm._v(" "),
                                  _c("span", [_vm._v("book-bookmark")])
                                ])
                              ]
                            )
                          ]),
                          _vm._v(" "),
                          _c("b-col", { attrs: { lg: "3", md: "6" } }, [
                            _c(
                              "button",
                              {
                                directives: [
                                  {
                                    name: "clipboard",
                                    rawName: "v-clipboard:copy",
                                    value: "ni ni-books",
                                    expression: "'ni ni-books'",
                                    arg: "copy"
                                  },
                                  {
                                    name: "clipboard",
                                    rawName: "v-clipboard:success",
                                    value: _vm.onCopy,
                                    expression: "onCopy",
                                    arg: "success"
                                  }
                                ],
                                staticClass: "btn-icon-clipboard",
                                attrs: {
                                  type: "button",
                                  title: "",
                                  "data-original-title": "Copy to clipboard"
                                }
                              },
                              [
                                _c("div", [
                                  _c("i", { staticClass: "ni ni-books" }),
                                  _vm._v(" "),
                                  _c("span", [_vm._v("books")])
                                ])
                              ]
                            )
                          ]),
                          _vm._v(" "),
                          _c("b-col", { attrs: { lg: "3", md: "6" } }, [
                            _c(
                              "button",
                              {
                                directives: [
                                  {
                                    name: "clipboard",
                                    rawName: "v-clipboard:copy",
                                    value: "ni ni-box-2",
                                    expression: "'ni ni-box-2'",
                                    arg: "copy"
                                  },
                                  {
                                    name: "clipboard",
                                    rawName: "v-clipboard:success",
                                    value: _vm.onCopy,
                                    expression: "onCopy",
                                    arg: "success"
                                  }
                                ],
                                staticClass: "btn-icon-clipboard",
                                attrs: {
                                  type: "button",
                                  title: "",
                                  "data-original-title": "Copy to clipboard"
                                }
                              },
                              [
                                _c("div", [
                                  _c("i", { staticClass: "ni ni-box-2" }),
                                  _vm._v(" "),
                                  _c("span", [_vm._v("box-2")])
                                ])
                              ]
                            )
                          ]),
                          _vm._v(" "),
                          _c("b-col", { attrs: { lg: "3", md: "6" } }, [
                            _c(
                              "button",
                              {
                                directives: [
                                  {
                                    name: "clipboard",
                                    rawName: "v-clipboard:copy",
                                    value: "ni ni-briefcase-24",
                                    expression: "'ni ni-briefcase-24'",
                                    arg: "copy"
                                  },
                                  {
                                    name: "clipboard",
                                    rawName: "v-clipboard:success",
                                    value: _vm.onCopy,
                                    expression: "onCopy",
                                    arg: "success"
                                  }
                                ],
                                staticClass: "btn-icon-clipboard",
                                attrs: {
                                  type: "button",
                                  title: "",
                                  "data-original-title": "Copy to clipboard"
                                }
                              },
                              [
                                _c("div", [
                                  _c("i", {
                                    staticClass: "ni ni-briefcase-24"
                                  }),
                                  _vm._v(" "),
                                  _c("span", [_vm._v("briefcase-24")])
                                ])
                              ]
                            )
                          ]),
                          _vm._v(" "),
                          _c("b-col", { attrs: { lg: "3", md: "6" } }, [
                            _c(
                              "button",
                              {
                                directives: [
                                  {
                                    name: "clipboard",
                                    rawName: "v-clipboard:copy",
                                    value: "ni ni-building",
                                    expression: "'ni ni-building'",
                                    arg: "copy"
                                  },
                                  {
                                    name: "clipboard",
                                    rawName: "v-clipboard:success",
                                    value: _vm.onCopy,
                                    expression: "onCopy",
                                    arg: "success"
                                  }
                                ],
                                staticClass: "btn-icon-clipboard",
                                attrs: {
                                  type: "button",
                                  title: "",
                                  "data-original-title": "Copy to clipboard"
                                }
                              },
                              [
                                _c("div", [
                                  _c("i", { staticClass: "ni ni-building" }),
                                  _vm._v(" "),
                                  _c("span", [_vm._v("building")])
                                ])
                              ]
                            )
                          ]),
                          _vm._v(" "),
                          _c("b-col", { attrs: { lg: "3", md: "6" } }, [
                            _c(
                              "button",
                              {
                                directives: [
                                  {
                                    name: "clipboard",
                                    rawName: "v-clipboard:copy",
                                    value: "ni ni-bulb-61",
                                    expression: "'ni ni-bulb-61'",
                                    arg: "copy"
                                  },
                                  {
                                    name: "clipboard",
                                    rawName: "v-clipboard:success",
                                    value: _vm.onCopy,
                                    expression: "onCopy",
                                    arg: "success"
                                  }
                                ],
                                staticClass: "btn-icon-clipboard",
                                attrs: {
                                  type: "button",
                                  title: "",
                                  "data-original-title": "Copy to clipboard"
                                }
                              },
                              [
                                _c("div", [
                                  _c("i", { staticClass: "ni ni-bulb-61" }),
                                  _vm._v(" "),
                                  _c("span", [_vm._v("bulb-61")])
                                ])
                              ]
                            )
                          ]),
                          _vm._v(" "),
                          _c("b-col", { attrs: { lg: "3", md: "6" } }, [
                            _c(
                              "button",
                              {
                                directives: [
                                  {
                                    name: "clipboard",
                                    rawName: "v-clipboard:copy",
                                    value: "ni ni-bullet-list-67",
                                    expression: "'ni ni-bullet-list-67'",
                                    arg: "copy"
                                  },
                                  {
                                    name: "clipboard",
                                    rawName: "v-clipboard:success",
                                    value: _vm.onCopy,
                                    expression: "onCopy",
                                    arg: "success"
                                  }
                                ],
                                staticClass: "btn-icon-clipboard",
                                attrs: {
                                  type: "button",
                                  title: "",
                                  "data-original-title": "Copy to clipboard"
                                }
                              },
                              [
                                _c("div", [
                                  _c("i", {
                                    staticClass: "ni ni-bullet-list-67"
                                  }),
                                  _vm._v(" "),
                                  _c("span", [_vm._v("bullet-list-67")])
                                ])
                              ]
                            )
                          ]),
                          _vm._v(" "),
                          _c("b-col", { attrs: { lg: "3", md: "6" } }, [
                            _c(
                              "button",
                              {
                                directives: [
                                  {
                                    name: "clipboard",
                                    rawName: "v-clipboard:copy",
                                    value: "ni ni-bus-front-12",
                                    expression: "'ni ni-bus-front-12'",
                                    arg: "copy"
                                  },
                                  {
                                    name: "clipboard",
                                    rawName: "v-clipboard:success",
                                    value: _vm.onCopy,
                                    expression: "onCopy",
                                    arg: "success"
                                  }
                                ],
                                staticClass: "btn-icon-clipboard",
                                attrs: {
                                  type: "button",
                                  title: "",
                                  "data-original-title": "Copy to clipboard"
                                }
                              },
                              [
                                _c("div", [
                                  _c("i", {
                                    staticClass: "ni ni-bus-front-12"
                                  }),
                                  _vm._v(" "),
                                  _c("span", [_vm._v("bus-front-12")])
                                ])
                              ]
                            )
                          ]),
                          _vm._v(" "),
                          _c("b-col", { attrs: { lg: "3", md: "6" } }, [
                            _c(
                              "button",
                              {
                                directives: [
                                  {
                                    name: "clipboard",
                                    rawName: "v-clipboard:copy",
                                    value: "ni ni-button-pause",
                                    expression: "'ni ni-button-pause'",
                                    arg: "copy"
                                  },
                                  {
                                    name: "clipboard",
                                    rawName: "v-clipboard:success",
                                    value: _vm.onCopy,
                                    expression: "onCopy",
                                    arg: "success"
                                  }
                                ],
                                staticClass: "btn-icon-clipboard",
                                attrs: {
                                  type: "button",
                                  title: "",
                                  "data-original-title": "Copy to clipboard"
                                }
                              },
                              [
                                _c("div", [
                                  _c("i", {
                                    staticClass: "ni ni-button-pause"
                                  }),
                                  _vm._v(" "),
                                  _c("span", [_vm._v("button-pause")])
                                ])
                              ]
                            )
                          ]),
                          _vm._v(" "),
                          _c("b-col", { attrs: { lg: "3", md: "6" } }, [
                            _c(
                              "button",
                              {
                                directives: [
                                  {
                                    name: "clipboard",
                                    rawName: "v-clipboard:copy",
                                    value: "ni ni-button-play",
                                    expression: "'ni ni-button-play'",
                                    arg: "copy"
                                  },
                                  {
                                    name: "clipboard",
                                    rawName: "v-clipboard:success",
                                    value: _vm.onCopy,
                                    expression: "onCopy",
                                    arg: "success"
                                  }
                                ],
                                staticClass: "btn-icon-clipboard",
                                attrs: {
                                  type: "button",
                                  title: "",
                                  "data-original-title": "Copy to clipboard"
                                }
                              },
                              [
                                _c("div", [
                                  _c("i", { staticClass: "ni ni-button-play" }),
                                  _vm._v(" "),
                                  _c("span", [_vm._v("button-play")])
                                ])
                              ]
                            )
                          ]),
                          _vm._v(" "),
                          _c("b-col", { attrs: { lg: "3", md: "6" } }, [
                            _c(
                              "button",
                              {
                                directives: [
                                  {
                                    name: "clipboard",
                                    rawName: "v-clipboard:copy",
                                    value: "ni ni-button-power",
                                    expression: "'ni ni-button-power'",
                                    arg: "copy"
                                  },
                                  {
                                    name: "clipboard",
                                    rawName: "v-clipboard:success",
                                    value: _vm.onCopy,
                                    expression: "onCopy",
                                    arg: "success"
                                  }
                                ],
                                staticClass: "btn-icon-clipboard",
                                attrs: {
                                  type: "button",
                                  title: "",
                                  "data-original-title": "Copy to clipboard"
                                }
                              },
                              [
                                _c("div", [
                                  _c("i", {
                                    staticClass: "ni ni-button-power"
                                  }),
                                  _vm._v(" "),
                                  _c("span", [_vm._v("button-power")])
                                ])
                              ]
                            )
                          ]),
                          _vm._v(" "),
                          _c("b-col", { attrs: { lg: "3", md: "6" } }, [
                            _c(
                              "button",
                              {
                                directives: [
                                  {
                                    name: "clipboard",
                                    rawName: "v-clipboard:copy",
                                    value: "ni ni-calendar-grid-58",
                                    expression: "'ni ni-calendar-grid-58'",
                                    arg: "copy"
                                  },
                                  {
                                    name: "clipboard",
                                    rawName: "v-clipboard:success",
                                    value: _vm.onCopy,
                                    expression: "onCopy",
                                    arg: "success"
                                  }
                                ],
                                staticClass: "btn-icon-clipboard",
                                attrs: {
                                  type: "button",
                                  title: "",
                                  "data-original-title": "Copy to clipboard"
                                }
                              },
                              [
                                _c("div", [
                                  _c("i", {
                                    staticClass: "ni ni-calendar-grid-58"
                                  }),
                                  _vm._v(" "),
                                  _c("span", [_vm._v("calendar-grid-58")])
                                ])
                              ]
                            )
                          ]),
                          _vm._v(" "),
                          _c("b-col", { attrs: { lg: "3", md: "6" } }, [
                            _c(
                              "button",
                              {
                                directives: [
                                  {
                                    name: "clipboard",
                                    rawName: "v-clipboard:copy",
                                    value: "ni ni-camera-compact",
                                    expression: "'ni ni-camera-compact'",
                                    arg: "copy"
                                  },
                                  {
                                    name: "clipboard",
                                    rawName: "v-clipboard:success",
                                    value: _vm.onCopy,
                                    expression: "onCopy",
                                    arg: "success"
                                  }
                                ],
                                staticClass: "btn-icon-clipboard",
                                attrs: {
                                  type: "button",
                                  title: "",
                                  "data-original-title": "Copy to clipboard"
                                }
                              },
                              [
                                _c("div", [
                                  _c("i", {
                                    staticClass: "ni ni-camera-compact"
                                  }),
                                  _vm._v(" "),
                                  _c("span", [_vm._v("camera-compact")])
                                ])
                              ]
                            )
                          ]),
                          _vm._v(" "),
                          _c("b-col", { attrs: { lg: "3", md: "6" } }, [
                            _c(
                              "button",
                              {
                                directives: [
                                  {
                                    name: "clipboard",
                                    rawName: "v-clipboard:copy",
                                    value: "ni ni-caps-small",
                                    expression: "'ni ni-caps-small'",
                                    arg: "copy"
                                  },
                                  {
                                    name: "clipboard",
                                    rawName: "v-clipboard:success",
                                    value: _vm.onCopy,
                                    expression: "onCopy",
                                    arg: "success"
                                  }
                                ],
                                staticClass: "btn-icon-clipboard",
                                attrs: {
                                  type: "button",
                                  title: "",
                                  "data-original-title": "Copy to clipboard"
                                }
                              },
                              [
                                _c("div", [
                                  _c("i", { staticClass: "ni ni-caps-small" }),
                                  _vm._v(" "),
                                  _c("span", [_vm._v("caps-small")])
                                ])
                              ]
                            )
                          ]),
                          _vm._v(" "),
                          _c("b-col", { attrs: { lg: "3", md: "6" } }, [
                            _c(
                              "button",
                              {
                                directives: [
                                  {
                                    name: "clipboard",
                                    rawName: "v-clipboard:copy",
                                    value: "ni ni-cart",
                                    expression: "'ni ni-cart'",
                                    arg: "copy"
                                  },
                                  {
                                    name: "clipboard",
                                    rawName: "v-clipboard:success",
                                    value: _vm.onCopy,
                                    expression: "onCopy",
                                    arg: "success"
                                  }
                                ],
                                staticClass: "btn-icon-clipboard",
                                attrs: {
                                  type: "button",
                                  title: "",
                                  "data-original-title": "Copy to clipboard"
                                }
                              },
                              [
                                _c("div", [
                                  _c("i", { staticClass: "ni ni-cart" }),
                                  _vm._v(" "),
                                  _c("span", [_vm._v("cart")])
                                ])
                              ]
                            )
                          ]),
                          _vm._v(" "),
                          _c("b-col", { attrs: { lg: "3", md: "6" } }, [
                            _c(
                              "button",
                              {
                                directives: [
                                  {
                                    name: "clipboard",
                                    rawName: "v-clipboard:copy",
                                    value: "ni ni-chart-bar-32",
                                    expression: "'ni ni-chart-bar-32'",
                                    arg: "copy"
                                  },
                                  {
                                    name: "clipboard",
                                    rawName: "v-clipboard:success",
                                    value: _vm.onCopy,
                                    expression: "onCopy",
                                    arg: "success"
                                  }
                                ],
                                staticClass: "btn-icon-clipboard",
                                attrs: {
                                  type: "button",
                                  title: "",
                                  "data-original-title": "Copy to clipboard"
                                }
                              },
                              [
                                _c("div", [
                                  _c("i", {
                                    staticClass: "ni ni-chart-bar-32"
                                  }),
                                  _vm._v(" "),
                                  _c("span", [_vm._v("chart-bar-32")])
                                ])
                              ]
                            )
                          ]),
                          _vm._v(" "),
                          _c("b-col", { attrs: { lg: "3", md: "6" } }, [
                            _c(
                              "button",
                              {
                                directives: [
                                  {
                                    name: "clipboard",
                                    rawName: "v-clipboard:copy",
                                    value: "ni ni-chart-pie-35",
                                    expression: "'ni ni-chart-pie-35'",
                                    arg: "copy"
                                  },
                                  {
                                    name: "clipboard",
                                    rawName: "v-clipboard:success",
                                    value: _vm.onCopy,
                                    expression: "onCopy",
                                    arg: "success"
                                  }
                                ],
                                staticClass: "btn-icon-clipboard",
                                attrs: {
                                  type: "button",
                                  title: "",
                                  "data-original-title": "Copy to clipboard"
                                }
                              },
                              [
                                _c("div", [
                                  _c("i", {
                                    staticClass: "ni ni-chart-pie-35"
                                  }),
                                  _vm._v(" "),
                                  _c("span", [_vm._v("chart-pie-35")])
                                ])
                              ]
                            )
                          ]),
                          _vm._v(" "),
                          _c("b-col", { attrs: { lg: "3", md: "6" } }, [
                            _c(
                              "button",
                              {
                                directives: [
                                  {
                                    name: "clipboard",
                                    rawName: "v-clipboard:copy",
                                    value: "ni ni-chat-round",
                                    expression: "'ni ni-chat-round'",
                                    arg: "copy"
                                  },
                                  {
                                    name: "clipboard",
                                    rawName: "v-clipboard:success",
                                    value: _vm.onCopy,
                                    expression: "onCopy",
                                    arg: "success"
                                  }
                                ],
                                staticClass: "btn-icon-clipboard",
                                attrs: {
                                  type: "button",
                                  title: "",
                                  "data-original-title": "Copy to clipboard"
                                }
                              },
                              [
                                _c("div", [
                                  _c("i", { staticClass: "ni ni-chat-round" }),
                                  _vm._v(" "),
                                  _c("span", [_vm._v("chat-round")])
                                ])
                              ]
                            )
                          ]),
                          _vm._v(" "),
                          _c("b-col", { attrs: { lg: "3", md: "6" } }, [
                            _c(
                              "button",
                              {
                                directives: [
                                  {
                                    name: "clipboard",
                                    rawName: "v-clipboard:copy",
                                    value: "ni ni-check-bold",
                                    expression: "'ni ni-check-bold'",
                                    arg: "copy"
                                  },
                                  {
                                    name: "clipboard",
                                    rawName: "v-clipboard:success",
                                    value: _vm.onCopy,
                                    expression: "onCopy",
                                    arg: "success"
                                  }
                                ],
                                staticClass: "btn-icon-clipboard",
                                attrs: {
                                  type: "button",
                                  title: "",
                                  "data-original-title": "Copy to clipboard"
                                }
                              },
                              [
                                _c("div", [
                                  _c("i", { staticClass: "ni ni-check-bold" }),
                                  _vm._v(" "),
                                  _c("span", [_vm._v("check-bold")])
                                ])
                              ]
                            )
                          ]),
                          _vm._v(" "),
                          _c("b-col", { attrs: { lg: "3", md: "6" } }, [
                            _c(
                              "button",
                              {
                                directives: [
                                  {
                                    name: "clipboard",
                                    rawName: "v-clipboard:copy",
                                    value: "ni ni-circle-08",
                                    expression: "'ni ni-circle-08'",
                                    arg: "copy"
                                  },
                                  {
                                    name: "clipboard",
                                    rawName: "v-clipboard:success",
                                    value: _vm.onCopy,
                                    expression: "onCopy",
                                    arg: "success"
                                  }
                                ],
                                staticClass: "btn-icon-clipboard",
                                attrs: {
                                  type: "button",
                                  title: "",
                                  "data-original-title": "Copy to clipboard"
                                }
                              },
                              [
                                _c("div", [
                                  _c("i", { staticClass: "ni ni-circle-08" }),
                                  _vm._v(" "),
                                  _c("span", [_vm._v("circle-08")])
                                ])
                              ]
                            )
                          ]),
                          _vm._v(" "),
                          _c("b-col", { attrs: { lg: "3", md: "6" } }, [
                            _c(
                              "button",
                              {
                                directives: [
                                  {
                                    name: "clipboard",
                                    rawName: "v-clipboard:copy",
                                    value: "ni ni-cloud-download-95",
                                    expression: "'ni ni-cloud-download-95'",
                                    arg: "copy"
                                  },
                                  {
                                    name: "clipboard",
                                    rawName: "v-clipboard:success",
                                    value: _vm.onCopy,
                                    expression: "onCopy",
                                    arg: "success"
                                  }
                                ],
                                staticClass: "btn-icon-clipboard",
                                attrs: {
                                  type: "button",
                                  title: "",
                                  "data-original-title": "Copy to clipboard"
                                }
                              },
                              [
                                _c("div", [
                                  _c("i", {
                                    staticClass: "ni ni-cloud-download-95"
                                  }),
                                  _vm._v(" "),
                                  _c("span", [_vm._v("cloud-download-95")])
                                ])
                              ]
                            )
                          ]),
                          _vm._v(" "),
                          _c("b-col", { attrs: { lg: "3", md: "6" } }, [
                            _c(
                              "button",
                              {
                                directives: [
                                  {
                                    name: "clipboard",
                                    rawName: "v-clipboard:copy",
                                    value: "ni ni-cloud-upload-96",
                                    expression: "'ni ni-cloud-upload-96'",
                                    arg: "copy"
                                  },
                                  {
                                    name: "clipboard",
                                    rawName: "v-clipboard:success",
                                    value: _vm.onCopy,
                                    expression: "onCopy",
                                    arg: "success"
                                  }
                                ],
                                staticClass: "btn-icon-clipboard",
                                attrs: {
                                  type: "button",
                                  title: "",
                                  "data-original-title": "Copy to clipboard"
                                }
                              },
                              [
                                _c("div", [
                                  _c("i", {
                                    staticClass: "ni ni-cloud-upload-96"
                                  }),
                                  _vm._v(" "),
                                  _c("span", [_vm._v("cloud-upload-96")])
                                ])
                              ]
                            )
                          ]),
                          _vm._v(" "),
                          _c("b-col", { attrs: { lg: "3", md: "6" } }, [
                            _c(
                              "button",
                              {
                                directives: [
                                  {
                                    name: "clipboard",
                                    rawName: "v-clipboard:copy",
                                    value: "ni ni-compass-04",
                                    expression: "'ni ni-compass-04'",
                                    arg: "copy"
                                  },
                                  {
                                    name: "clipboard",
                                    rawName: "v-clipboard:success",
                                    value: _vm.onCopy,
                                    expression: "onCopy",
                                    arg: "success"
                                  }
                                ],
                                staticClass: "btn-icon-clipboard",
                                attrs: {
                                  type: "button",
                                  title: "",
                                  "data-original-title": "Copy to clipboard"
                                }
                              },
                              [
                                _c("div", [
                                  _c("i", { staticClass: "ni ni-compass-04" }),
                                  _vm._v(" "),
                                  _c("span", [_vm._v("compass-04")])
                                ])
                              ]
                            )
                          ]),
                          _vm._v(" "),
                          _c("b-col", { attrs: { lg: "3", md: "6" } }, [
                            _c(
                              "button",
                              {
                                directives: [
                                  {
                                    name: "clipboard",
                                    rawName: "v-clipboard:copy",
                                    value: "ni ni-controller",
                                    expression: "'ni ni-controller'",
                                    arg: "copy"
                                  },
                                  {
                                    name: "clipboard",
                                    rawName: "v-clipboard:success",
                                    value: _vm.onCopy,
                                    expression: "onCopy",
                                    arg: "success"
                                  }
                                ],
                                staticClass: "btn-icon-clipboard",
                                attrs: {
                                  type: "button",
                                  title: "",
                                  "data-original-title": "Copy to clipboard"
                                }
                              },
                              [
                                _c("div", [
                                  _c("i", { staticClass: "ni ni-controller" }),
                                  _vm._v(" "),
                                  _c("span", [_vm._v("controller")])
                                ])
                              ]
                            )
                          ]),
                          _vm._v(" "),
                          _c("b-col", { attrs: { lg: "3", md: "6" } }, [
                            _c(
                              "button",
                              {
                                directives: [
                                  {
                                    name: "clipboard",
                                    rawName: "v-clipboard:copy",
                                    value: "ni ni-credit-card",
                                    expression: "'ni ni-credit-card'",
                                    arg: "copy"
                                  },
                                  {
                                    name: "clipboard",
                                    rawName: "v-clipboard:success",
                                    value: _vm.onCopy,
                                    expression: "onCopy",
                                    arg: "success"
                                  }
                                ],
                                staticClass: "btn-icon-clipboard",
                                attrs: {
                                  type: "button",
                                  title: "",
                                  "data-original-title": "Copy to clipboard"
                                }
                              },
                              [
                                _c("div", [
                                  _c("i", { staticClass: "ni ni-credit-card" }),
                                  _vm._v(" "),
                                  _c("span", [_vm._v("credit-card")])
                                ])
                              ]
                            )
                          ]),
                          _vm._v(" "),
                          _c("b-col", { attrs: { lg: "3", md: "6" } }, [
                            _c(
                              "button",
                              {
                                directives: [
                                  {
                                    name: "clipboard",
                                    rawName: "v-clipboard:copy",
                                    value: "ni ni-curved-next",
                                    expression: "'ni ni-curved-next'",
                                    arg: "copy"
                                  },
                                  {
                                    name: "clipboard",
                                    rawName: "v-clipboard:success",
                                    value: _vm.onCopy,
                                    expression: "onCopy",
                                    arg: "success"
                                  }
                                ],
                                staticClass: "btn-icon-clipboard",
                                attrs: {
                                  type: "button",
                                  title: "",
                                  "data-original-title": "Copy to clipboard"
                                }
                              },
                              [
                                _c("div", [
                                  _c("i", { staticClass: "ni ni-curved-next" }),
                                  _vm._v(" "),
                                  _c("span", [_vm._v("curved-next")])
                                ])
                              ]
                            )
                          ]),
                          _vm._v(" "),
                          _c("b-col", { attrs: { lg: "3", md: "6" } }, [
                            _c(
                              "button",
                              {
                                directives: [
                                  {
                                    name: "clipboard",
                                    rawName: "v-clipboard:copy",
                                    value: "ni ni-delivery-fast",
                                    expression: "'ni ni-delivery-fast'",
                                    arg: "copy"
                                  },
                                  {
                                    name: "clipboard",
                                    rawName: "v-clipboard:success",
                                    value: _vm.onCopy,
                                    expression: "onCopy",
                                    arg: "success"
                                  }
                                ],
                                staticClass: "btn-icon-clipboard",
                                attrs: {
                                  type: "button",
                                  title: "",
                                  "data-original-title": "Copy to clipboard"
                                }
                              },
                              [
                                _c("div", [
                                  _c("i", {
                                    staticClass: "ni ni-delivery-fast"
                                  }),
                                  _vm._v(" "),
                                  _c("span", [_vm._v("delivery-fast")])
                                ])
                              ]
                            )
                          ]),
                          _vm._v(" "),
                          _c("b-col", { attrs: { lg: "3", md: "6" } }, [
                            _c(
                              "button",
                              {
                                directives: [
                                  {
                                    name: "clipboard",
                                    rawName: "v-clipboard:copy",
                                    value: "ni ni-diamond",
                                    expression: "'ni ni-diamond'",
                                    arg: "copy"
                                  },
                                  {
                                    name: "clipboard",
                                    rawName: "v-clipboard:success",
                                    value: _vm.onCopy,
                                    expression: "onCopy",
                                    arg: "success"
                                  }
                                ],
                                staticClass: "btn-icon-clipboard",
                                attrs: {
                                  type: "button",
                                  title: "",
                                  "data-original-title": "Copy to clipboard"
                                }
                              },
                              [
                                _c("div", [
                                  _c("i", { staticClass: "ni ni-diamond" }),
                                  _vm._v(" "),
                                  _c("span", [_vm._v("diamond")])
                                ])
                              ]
                            )
                          ]),
                          _vm._v(" "),
                          _c("b-col", { attrs: { lg: "3", md: "6" } }, [
                            _c(
                              "button",
                              {
                                directives: [
                                  {
                                    name: "clipboard",
                                    rawName: "v-clipboard:copy",
                                    value: "ni ni-email-83",
                                    expression: "'ni ni-email-83'",
                                    arg: "copy"
                                  },
                                  {
                                    name: "clipboard",
                                    rawName: "v-clipboard:success",
                                    value: _vm.onCopy,
                                    expression: "onCopy",
                                    arg: "success"
                                  }
                                ],
                                staticClass: "btn-icon-clipboard",
                                attrs: {
                                  type: "button",
                                  title: "",
                                  "data-original-title": "Copy to clipboard"
                                }
                              },
                              [
                                _c("div", [
                                  _c("i", { staticClass: "ni ni-email-83" }),
                                  _vm._v(" "),
                                  _c("span", [_vm._v("email-83")])
                                ])
                              ]
                            )
                          ]),
                          _vm._v(" "),
                          _c("b-col", { attrs: { lg: "3", md: "6" } }, [
                            _c(
                              "button",
                              {
                                directives: [
                                  {
                                    name: "clipboard",
                                    rawName: "v-clipboard:copy",
                                    value: "ni ni-fat-add",
                                    expression: "'ni ni-fat-add'",
                                    arg: "copy"
                                  },
                                  {
                                    name: "clipboard",
                                    rawName: "v-clipboard:success",
                                    value: _vm.onCopy,
                                    expression: "onCopy",
                                    arg: "success"
                                  }
                                ],
                                staticClass: "btn-icon-clipboard",
                                attrs: {
                                  type: "button",
                                  title: "",
                                  "data-original-title": "Copy to clipboard"
                                }
                              },
                              [
                                _c("div", [
                                  _c("i", { staticClass: "ni ni-fat-add" }),
                                  _vm._v(" "),
                                  _c("span", [_vm._v("fat-add")])
                                ])
                              ]
                            )
                          ]),
                          _vm._v(" "),
                          _c("b-col", { attrs: { lg: "3", md: "6" } }, [
                            _c(
                              "button",
                              {
                                directives: [
                                  {
                                    name: "clipboard",
                                    rawName: "v-clipboard:copy",
                                    value: "ni ni-fat-delete",
                                    expression: "'ni ni-fat-delete'",
                                    arg: "copy"
                                  },
                                  {
                                    name: "clipboard",
                                    rawName: "v-clipboard:success",
                                    value: _vm.onCopy,
                                    expression: "onCopy",
                                    arg: "success"
                                  }
                                ],
                                staticClass: "btn-icon-clipboard",
                                attrs: {
                                  type: "button",
                                  title: "",
                                  "data-original-title": "Copy to clipboard"
                                }
                              },
                              [
                                _c("div", [
                                  _c("i", { staticClass: "ni ni-fat-delete" }),
                                  _vm._v(" "),
                                  _c("span", [_vm._v("fat-delete")])
                                ])
                              ]
                            )
                          ]),
                          _vm._v(" "),
                          _c("b-col", { attrs: { lg: "3", md: "6" } }, [
                            _c(
                              "button",
                              {
                                directives: [
                                  {
                                    name: "clipboard",
                                    rawName: "v-clipboard:copy",
                                    value: "ni ni-fat-remove",
                                    expression: "'ni ni-fat-remove'",
                                    arg: "copy"
                                  },
                                  {
                                    name: "clipboard",
                                    rawName: "v-clipboard:success",
                                    value: _vm.onCopy,
                                    expression: "onCopy",
                                    arg: "success"
                                  }
                                ],
                                staticClass: "btn-icon-clipboard",
                                attrs: {
                                  type: "button",
                                  title: "",
                                  "data-original-title": "Copy to clipboard"
                                }
                              },
                              [
                                _c("div", [
                                  _c("i", { staticClass: "ni ni-fat-remove" }),
                                  _vm._v(" "),
                                  _c("span", [_vm._v("fat-remove")])
                                ])
                              ]
                            )
                          ]),
                          _vm._v(" "),
                          _c("b-col", { attrs: { lg: "3", md: "6" } }, [
                            _c(
                              "button",
                              {
                                directives: [
                                  {
                                    name: "clipboard",
                                    rawName: "v-clipboard:copy",
                                    value: "ni ni-favourite-28",
                                    expression: "'ni ni-favourite-28'",
                                    arg: "copy"
                                  },
                                  {
                                    name: "clipboard",
                                    rawName: "v-clipboard:success",
                                    value: _vm.onCopy,
                                    expression: "onCopy",
                                    arg: "success"
                                  }
                                ],
                                staticClass: "btn-icon-clipboard",
                                attrs: {
                                  type: "button",
                                  title: "",
                                  "data-original-title": "Copy to clipboard"
                                }
                              },
                              [
                                _c("div", [
                                  _c("i", {
                                    staticClass: "ni ni-favourite-28"
                                  }),
                                  _vm._v(" "),
                                  _c("span", [_vm._v("favourite-28")])
                                ])
                              ]
                            )
                          ]),
                          _vm._v(" "),
                          _c("b-col", { attrs: { lg: "3", md: "6" } }, [
                            _c(
                              "button",
                              {
                                directives: [
                                  {
                                    name: "clipboard",
                                    rawName: "v-clipboard:copy",
                                    value: "ni ni-folder-17",
                                    expression: "'ni ni-folder-17'",
                                    arg: "copy"
                                  },
                                  {
                                    name: "clipboard",
                                    rawName: "v-clipboard:success",
                                    value: _vm.onCopy,
                                    expression: "onCopy",
                                    arg: "success"
                                  }
                                ],
                                staticClass: "btn-icon-clipboard",
                                attrs: {
                                  type: "button",
                                  title: "",
                                  "data-original-title": "Copy to clipboard"
                                }
                              },
                              [
                                _c("div", [
                                  _c("i", { staticClass: "ni ni-folder-17" }),
                                  _vm._v(" "),
                                  _c("span", [_vm._v("folder-17")])
                                ])
                              ]
                            )
                          ]),
                          _vm._v(" "),
                          _c("b-col", { attrs: { lg: "3", md: "6" } }, [
                            _c(
                              "button",
                              {
                                directives: [
                                  {
                                    name: "clipboard",
                                    rawName: "v-clipboard:copy",
                                    value: "ni ni-glasses-2",
                                    expression: "'ni ni-glasses-2'",
                                    arg: "copy"
                                  },
                                  {
                                    name: "clipboard",
                                    rawName: "v-clipboard:success",
                                    value: _vm.onCopy,
                                    expression: "onCopy",
                                    arg: "success"
                                  }
                                ],
                                staticClass: "btn-icon-clipboard",
                                attrs: {
                                  type: "button",
                                  title: "",
                                  "data-original-title": "Copy to clipboard"
                                }
                              },
                              [
                                _c("div", [
                                  _c("i", { staticClass: "ni ni-glasses-2" }),
                                  _vm._v(" "),
                                  _c("span", [_vm._v("glasses-2")])
                                ])
                              ]
                            )
                          ]),
                          _vm._v(" "),
                          _c("b-col", { attrs: { lg: "3", md: "6" } }, [
                            _c(
                              "button",
                              {
                                directives: [
                                  {
                                    name: "clipboard",
                                    rawName: "v-clipboard:copy",
                                    value: "ni ni-hat-3",
                                    expression: "'ni ni-hat-3'",
                                    arg: "copy"
                                  },
                                  {
                                    name: "clipboard",
                                    rawName: "v-clipboard:success",
                                    value: _vm.onCopy,
                                    expression: "onCopy",
                                    arg: "success"
                                  }
                                ],
                                staticClass: "btn-icon-clipboard",
                                attrs: {
                                  type: "button",
                                  title: "",
                                  "data-original-title": "Copy to clipboard"
                                }
                              },
                              [
                                _c("div", [
                                  _c("i", { staticClass: "ni ni-hat-3" }),
                                  _vm._v(" "),
                                  _c("span", [_vm._v("hat-3")])
                                ])
                              ]
                            )
                          ]),
                          _vm._v(" "),
                          _c("b-col", { attrs: { lg: "3", md: "6" } }, [
                            _c(
                              "button",
                              {
                                directives: [
                                  {
                                    name: "clipboard",
                                    rawName: "v-clipboard:copy",
                                    value: "ni ni-headphones",
                                    expression: "'ni ni-headphones'",
                                    arg: "copy"
                                  },
                                  {
                                    name: "clipboard",
                                    rawName: "v-clipboard:success",
                                    value: _vm.onCopy,
                                    expression: "onCopy",
                                    arg: "success"
                                  }
                                ],
                                staticClass: "btn-icon-clipboard",
                                attrs: {
                                  type: "button",
                                  title: "",
                                  "data-original-title": "Copy to clipboard"
                                }
                              },
                              [
                                _c("div", [
                                  _c("i", { staticClass: "ni ni-headphones" }),
                                  _vm._v(" "),
                                  _c("span", [_vm._v("headphones")])
                                ])
                              ]
                            )
                          ]),
                          _vm._v(" "),
                          _c("b-col", { attrs: { lg: "3", md: "6" } }, [
                            _c(
                              "button",
                              {
                                directives: [
                                  {
                                    name: "clipboard",
                                    rawName: "v-clipboard:copy",
                                    value: "ni ni-html5",
                                    expression: "'ni ni-html5'",
                                    arg: "copy"
                                  },
                                  {
                                    name: "clipboard",
                                    rawName: "v-clipboard:success",
                                    value: _vm.onCopy,
                                    expression: "onCopy",
                                    arg: "success"
                                  }
                                ],
                                staticClass: "btn-icon-clipboard",
                                attrs: {
                                  type: "button",
                                  title: "",
                                  "data-original-title": "Copy to clipboard"
                                }
                              },
                              [
                                _c("div", [
                                  _c("i", { staticClass: "ni ni-html5" }),
                                  _vm._v(" "),
                                  _c("span", [_vm._v("html5")])
                                ])
                              ]
                            )
                          ]),
                          _vm._v(" "),
                          _c("b-col", { attrs: { lg: "3", md: "6" } }, [
                            _c(
                              "button",
                              {
                                directives: [
                                  {
                                    name: "clipboard",
                                    rawName: "v-clipboard:copy",
                                    value: "ni ni-istanbul",
                                    expression: "'ni ni-istanbul'",
                                    arg: "copy"
                                  },
                                  {
                                    name: "clipboard",
                                    rawName: "v-clipboard:success",
                                    value: _vm.onCopy,
                                    expression: "onCopy",
                                    arg: "success"
                                  }
                                ],
                                staticClass: "btn-icon-clipboard",
                                attrs: {
                                  type: "button",
                                  title: "",
                                  "data-original-title": "Copy to clipboard"
                                }
                              },
                              [
                                _c("div", [
                                  _c("i", { staticClass: "ni ni-istanbul" }),
                                  _vm._v(" "),
                                  _c("span", [_vm._v("istanbul")])
                                ])
                              ]
                            )
                          ]),
                          _vm._v(" "),
                          _c("b-col", { attrs: { lg: "3", md: "6" } }, [
                            _c(
                              "button",
                              {
                                directives: [
                                  {
                                    name: "clipboard",
                                    rawName: "v-clipboard:copy",
                                    value: "ni ni-circle-08",
                                    expression: "'ni ni-circle-08'",
                                    arg: "copy"
                                  },
                                  {
                                    name: "clipboard",
                                    rawName: "v-clipboard:success",
                                    value: _vm.onCopy,
                                    expression: "onCopy",
                                    arg: "success"
                                  }
                                ],
                                staticClass: "btn-icon-clipboard",
                                attrs: {
                                  type: "button",
                                  title: "",
                                  "data-original-title": "Copy to clipboard"
                                }
                              },
                              [
                                _c("div", [
                                  _c("i", { staticClass: "ni ni-circle-08" }),
                                  _vm._v(" "),
                                  _c("span", [_vm._v("circle-08")])
                                ])
                              ]
                            )
                          ]),
                          _vm._v(" "),
                          _c("b-col", { attrs: { lg: "3", md: "6" } }, [
                            _c(
                              "button",
                              {
                                directives: [
                                  {
                                    name: "clipboard",
                                    rawName: "v-clipboard:copy",
                                    value: "ni ni-key-25",
                                    expression: "'ni ni-key-25'",
                                    arg: "copy"
                                  },
                                  {
                                    name: "clipboard",
                                    rawName: "v-clipboard:success",
                                    value: _vm.onCopy,
                                    expression: "onCopy",
                                    arg: "success"
                                  }
                                ],
                                staticClass: "btn-icon-clipboard",
                                attrs: {
                                  type: "button",
                                  title: "",
                                  "data-original-title": "Copy to clipboard"
                                }
                              },
                              [
                                _c("div", [
                                  _c("i", { staticClass: "ni ni-key-25" }),
                                  _vm._v(" "),
                                  _c("span", [_vm._v("key-25")])
                                ])
                              ]
                            )
                          ]),
                          _vm._v(" "),
                          _c("b-col", { attrs: { lg: "3", md: "6" } }, [
                            _c(
                              "button",
                              {
                                directives: [
                                  {
                                    name: "clipboard",
                                    rawName: "v-clipboard:copy",
                                    value: "ni ni-laptop",
                                    expression: "'ni ni-laptop'",
                                    arg: "copy"
                                  },
                                  {
                                    name: "clipboard",
                                    rawName: "v-clipboard:success",
                                    value: _vm.onCopy,
                                    expression: "onCopy",
                                    arg: "success"
                                  }
                                ],
                                staticClass: "btn-icon-clipboard",
                                attrs: {
                                  type: "button",
                                  title: "",
                                  "data-original-title": "Copy to clipboard"
                                }
                              },
                              [
                                _c("div", [
                                  _c("i", { staticClass: "ni ni-laptop" }),
                                  _vm._v(" "),
                                  _c("span", [_vm._v("laptop")])
                                ])
                              ]
                            )
                          ]),
                          _vm._v(" "),
                          _c("b-col", { attrs: { lg: "3", md: "6" } }, [
                            _c(
                              "button",
                              {
                                directives: [
                                  {
                                    name: "clipboard",
                                    rawName: "v-clipboard:copy",
                                    value: "ni ni-like-2",
                                    expression: "'ni ni-like-2'",
                                    arg: "copy"
                                  },
                                  {
                                    name: "clipboard",
                                    rawName: "v-clipboard:success",
                                    value: _vm.onCopy,
                                    expression: "onCopy",
                                    arg: "success"
                                  }
                                ],
                                staticClass: "btn-icon-clipboard",
                                attrs: {
                                  type: "button",
                                  title: "",
                                  "data-original-title": "Copy to clipboard"
                                }
                              },
                              [
                                _c("div", [
                                  _c("i", { staticClass: "ni ni-like-2" }),
                                  _vm._v(" "),
                                  _c("span", [_vm._v("like-2")])
                                ])
                              ]
                            )
                          ]),
                          _vm._v(" "),
                          _c("b-col", { attrs: { lg: "3", md: "6" } }, [
                            _c(
                              "button",
                              {
                                directives: [
                                  {
                                    name: "clipboard",
                                    rawName: "v-clipboard:copy",
                                    value: "ni ni-lock-circle-open",
                                    expression: "'ni ni-lock-circle-open'",
                                    arg: "copy"
                                  },
                                  {
                                    name: "clipboard",
                                    rawName: "v-clipboard:success",
                                    value: _vm.onCopy,
                                    expression: "onCopy",
                                    arg: "success"
                                  }
                                ],
                                staticClass: "btn-icon-clipboard",
                                attrs: {
                                  type: "button",
                                  title: "",
                                  "data-original-title": "Copy to clipboard"
                                }
                              },
                              [
                                _c("div", [
                                  _c("i", {
                                    staticClass: "ni ni-lock-circle-open"
                                  }),
                                  _vm._v(" "),
                                  _c("span", [_vm._v("lock-circle-open")])
                                ])
                              ]
                            )
                          ]),
                          _vm._v(" "),
                          _c("b-col", { attrs: { lg: "3", md: "6" } }, [
                            _c(
                              "button",
                              {
                                directives: [
                                  {
                                    name: "clipboard",
                                    rawName: "v-clipboard:copy",
                                    value: "ni ni-map-big",
                                    expression: "'ni ni-map-big'",
                                    arg: "copy"
                                  },
                                  {
                                    name: "clipboard",
                                    rawName: "v-clipboard:success",
                                    value: _vm.onCopy,
                                    expression: "onCopy",
                                    arg: "success"
                                  }
                                ],
                                staticClass: "btn-icon-clipboard",
                                attrs: {
                                  type: "button",
                                  title: "",
                                  "data-original-title": "Copy to clipboard"
                                }
                              },
                              [
                                _c("div", [
                                  _c("i", { staticClass: "ni ni-map-big" }),
                                  _vm._v(" "),
                                  _c("span", [_vm._v("map-big")])
                                ])
                              ]
                            )
                          ]),
                          _vm._v(" "),
                          _c("b-col", { attrs: { lg: "3", md: "6" } }, [
                            _c(
                              "button",
                              {
                                directives: [
                                  {
                                    name: "clipboard",
                                    rawName: "v-clipboard:copy",
                                    value: "ni ni-mobile-button",
                                    expression: "'ni ni-mobile-button'",
                                    arg: "copy"
                                  },
                                  {
                                    name: "clipboard",
                                    rawName: "v-clipboard:success",
                                    value: _vm.onCopy,
                                    expression: "onCopy",
                                    arg: "success"
                                  }
                                ],
                                staticClass: "btn-icon-clipboard",
                                attrs: {
                                  type: "button",
                                  title: "",
                                  "data-original-title": "Copy to clipboard"
                                }
                              },
                              [
                                _c("div", [
                                  _c("i", {
                                    staticClass: "ni ni-mobile-button"
                                  }),
                                  _vm._v(" "),
                                  _c("span", [_vm._v("mobile-button")])
                                ])
                              ]
                            )
                          ]),
                          _vm._v(" "),
                          _c("b-col", { attrs: { lg: "3", md: "6" } }, [
                            _c(
                              "button",
                              {
                                directives: [
                                  {
                                    name: "clipboard",
                                    rawName: "v-clipboard:copy",
                                    value: "ni ni-money-coins",
                                    expression: "'ni ni-money-coins'",
                                    arg: "copy"
                                  },
                                  {
                                    name: "clipboard",
                                    rawName: "v-clipboard:success",
                                    value: _vm.onCopy,
                                    expression: "onCopy",
                                    arg: "success"
                                  }
                                ],
                                staticClass: "btn-icon-clipboard",
                                attrs: {
                                  type: "button",
                                  title: "",
                                  "data-original-title": "Copy to clipboard"
                                }
                              },
                              [
                                _c("div", [
                                  _c("i", { staticClass: "ni ni-money-coins" }),
                                  _vm._v(" "),
                                  _c("span", [_vm._v("money-coins")])
                                ])
                              ]
                            )
                          ]),
                          _vm._v(" "),
                          _c("b-col", { attrs: { lg: "3", md: "6" } }, [
                            _c(
                              "button",
                              {
                                directives: [
                                  {
                                    name: "clipboard",
                                    rawName: "v-clipboard:copy",
                                    value: "ni ni-note-03",
                                    expression: "'ni ni-note-03'",
                                    arg: "copy"
                                  },
                                  {
                                    name: "clipboard",
                                    rawName: "v-clipboard:success",
                                    value: _vm.onCopy,
                                    expression: "onCopy",
                                    arg: "success"
                                  }
                                ],
                                staticClass: "btn-icon-clipboard",
                                attrs: {
                                  type: "button",
                                  title: "",
                                  "data-original-title": "Copy to clipboard"
                                }
                              },
                              [
                                _c("div", [
                                  _c("i", { staticClass: "ni ni-note-03" }),
                                  _vm._v(" "),
                                  _c("span", [_vm._v("note-03")])
                                ])
                              ]
                            )
                          ]),
                          _vm._v(" "),
                          _c("b-col", { attrs: { lg: "3", md: "6" } }, [
                            _c(
                              "button",
                              {
                                directives: [
                                  {
                                    name: "clipboard",
                                    rawName: "v-clipboard:copy",
                                    value: "ni ni-notification-70",
                                    expression: "'ni ni-notification-70'",
                                    arg: "copy"
                                  },
                                  {
                                    name: "clipboard",
                                    rawName: "v-clipboard:success",
                                    value: _vm.onCopy,
                                    expression: "onCopy",
                                    arg: "success"
                                  }
                                ],
                                staticClass: "btn-icon-clipboard",
                                attrs: {
                                  type: "button",
                                  title: "",
                                  "data-original-title": "Copy to clipboard"
                                }
                              },
                              [
                                _c("div", [
                                  _c("i", {
                                    staticClass: "ni ni-notification-70"
                                  }),
                                  _vm._v(" "),
                                  _c("span", [_vm._v("notification-70")])
                                ])
                              ]
                            )
                          ]),
                          _vm._v(" "),
                          _c("b-col", { attrs: { lg: "3", md: "6" } }, [
                            _c(
                              "button",
                              {
                                directives: [
                                  {
                                    name: "clipboard",
                                    rawName: "v-clipboard:copy",
                                    value: "ni ni-palette",
                                    expression: "'ni ni-palette'",
                                    arg: "copy"
                                  },
                                  {
                                    name: "clipboard",
                                    rawName: "v-clipboard:success",
                                    value: _vm.onCopy,
                                    expression: "onCopy",
                                    arg: "success"
                                  }
                                ],
                                staticClass: "btn-icon-clipboard",
                                attrs: {
                                  type: "button",
                                  title: "",
                                  "data-original-title": "Copy to clipboard"
                                }
                              },
                              [
                                _c("div", [
                                  _c("i", { staticClass: "ni ni-palette" }),
                                  _vm._v(" "),
                                  _c("span", [_vm._v("palette")])
                                ])
                              ]
                            )
                          ]),
                          _vm._v(" "),
                          _c("b-col", { attrs: { lg: "3", md: "6" } }, [
                            _c(
                              "button",
                              {
                                directives: [
                                  {
                                    name: "clipboard",
                                    rawName: "v-clipboard:copy",
                                    value: "ni ni-paper-diploma",
                                    expression: "'ni ni-paper-diploma'",
                                    arg: "copy"
                                  },
                                  {
                                    name: "clipboard",
                                    rawName: "v-clipboard:success",
                                    value: _vm.onCopy,
                                    expression: "onCopy",
                                    arg: "success"
                                  }
                                ],
                                staticClass: "btn-icon-clipboard",
                                attrs: {
                                  type: "button",
                                  title: "",
                                  "data-original-title": "Copy to clipboard"
                                }
                              },
                              [
                                _c("div", [
                                  _c("i", {
                                    staticClass: "ni ni-paper-diploma"
                                  }),
                                  _vm._v(" "),
                                  _c("span", [_vm._v("paper-diploma")])
                                ])
                              ]
                            )
                          ]),
                          _vm._v(" "),
                          _c("b-col", { attrs: { lg: "3", md: "6" } }, [
                            _c(
                              "button",
                              {
                                directives: [
                                  {
                                    name: "clipboard",
                                    rawName: "v-clipboard:copy",
                                    value: "ni ni-pin-3",
                                    expression: "'ni ni-pin-3'",
                                    arg: "copy"
                                  },
                                  {
                                    name: "clipboard",
                                    rawName: "v-clipboard:success",
                                    value: _vm.onCopy,
                                    expression: "onCopy",
                                    arg: "success"
                                  }
                                ],
                                staticClass: "btn-icon-clipboard",
                                attrs: {
                                  type: "button",
                                  title: "",
                                  "data-original-title": "Copy to clipboard"
                                }
                              },
                              [
                                _c("div", [
                                  _c("i", { staticClass: "ni ni-pin-3" }),
                                  _vm._v(" "),
                                  _c("span", [_vm._v("pin-3")])
                                ])
                              ]
                            )
                          ]),
                          _vm._v(" "),
                          _c("b-col", { attrs: { lg: "3", md: "6" } }, [
                            _c(
                              "button",
                              {
                                directives: [
                                  {
                                    name: "clipboard",
                                    rawName: "v-clipboard:copy",
                                    value: "ni ni-planet",
                                    expression: "'ni ni-planet'",
                                    arg: "copy"
                                  },
                                  {
                                    name: "clipboard",
                                    rawName: "v-clipboard:success",
                                    value: _vm.onCopy,
                                    expression: "onCopy",
                                    arg: "success"
                                  }
                                ],
                                staticClass: "btn-icon-clipboard",
                                attrs: {
                                  type: "button",
                                  title: "",
                                  "data-original-title": "Copy to clipboard"
                                }
                              },
                              [
                                _c("div", [
                                  _c("i", { staticClass: "ni ni-planet" }),
                                  _vm._v(" "),
                                  _c("span", [_vm._v("planet")])
                                ])
                              ]
                            )
                          ]),
                          _vm._v(" "),
                          _c("b-col", { attrs: { lg: "3", md: "6" } }, [
                            _c(
                              "button",
                              {
                                directives: [
                                  {
                                    name: "clipboard",
                                    rawName: "v-clipboard:copy",
                                    value: "ni ni-ruler-pencil",
                                    expression: "'ni ni-ruler-pencil'",
                                    arg: "copy"
                                  },
                                  {
                                    name: "clipboard",
                                    rawName: "v-clipboard:success",
                                    value: _vm.onCopy,
                                    expression: "onCopy",
                                    arg: "success"
                                  }
                                ],
                                staticClass: "btn-icon-clipboard",
                                attrs: {
                                  type: "button",
                                  title: "",
                                  "data-original-title": "Copy to clipboard"
                                }
                              },
                              [
                                _c("div", [
                                  _c("i", {
                                    staticClass: "ni ni-ruler-pencil"
                                  }),
                                  _vm._v(" "),
                                  _c("span", [_vm._v("ruler-pencil")])
                                ])
                              ]
                            )
                          ]),
                          _vm._v(" "),
                          _c("b-col", { attrs: { lg: "3", md: "6" } }, [
                            _c(
                              "button",
                              {
                                directives: [
                                  {
                                    name: "clipboard",
                                    rawName: "v-clipboard:copy",
                                    value: "ni ni-satisfied",
                                    expression: "'ni ni-satisfied'",
                                    arg: "copy"
                                  },
                                  {
                                    name: "clipboard",
                                    rawName: "v-clipboard:success",
                                    value: _vm.onCopy,
                                    expression: "onCopy",
                                    arg: "success"
                                  }
                                ],
                                staticClass: "btn-icon-clipboard",
                                attrs: {
                                  type: "button",
                                  title: "",
                                  "data-original-title": "Copy to clipboard"
                                }
                              },
                              [
                                _c("div", [
                                  _c("i", { staticClass: "ni ni-satisfied" }),
                                  _vm._v(" "),
                                  _c("span", [_vm._v("satisfied")])
                                ])
                              ]
                            )
                          ]),
                          _vm._v(" "),
                          _c("b-col", { attrs: { lg: "3", md: "6" } }, [
                            _c(
                              "button",
                              {
                                directives: [
                                  {
                                    name: "clipboard",
                                    rawName: "v-clipboard:copy",
                                    value: "ni ni-scissors",
                                    expression: "'ni ni-scissors'",
                                    arg: "copy"
                                  },
                                  {
                                    name: "clipboard",
                                    rawName: "v-clipboard:success",
                                    value: _vm.onCopy,
                                    expression: "onCopy",
                                    arg: "success"
                                  }
                                ],
                                staticClass: "btn-icon-clipboard",
                                attrs: {
                                  type: "button",
                                  title: "",
                                  "data-original-title": "Copy to clipboard"
                                }
                              },
                              [
                                _c("div", [
                                  _c("i", { staticClass: "ni ni-scissors" }),
                                  _vm._v(" "),
                                  _c("span", [_vm._v("scissors")])
                                ])
                              ]
                            )
                          ]),
                          _vm._v(" "),
                          _c("b-col", { attrs: { lg: "3", md: "6" } }, [
                            _c(
                              "button",
                              {
                                directives: [
                                  {
                                    name: "clipboard",
                                    rawName: "v-clipboard:copy",
                                    value: "ni ni-send",
                                    expression: "'ni ni-send'",
                                    arg: "copy"
                                  },
                                  {
                                    name: "clipboard",
                                    rawName: "v-clipboard:success",
                                    value: _vm.onCopy,
                                    expression: "onCopy",
                                    arg: "success"
                                  }
                                ],
                                staticClass: "btn-icon-clipboard",
                                attrs: {
                                  type: "button",
                                  title: "",
                                  "data-original-title": "Copy to clipboard"
                                }
                              },
                              [
                                _c("div", [
                                  _c("i", { staticClass: "ni ni-send" }),
                                  _vm._v(" "),
                                  _c("span", [_vm._v("send")])
                                ])
                              ]
                            )
                          ]),
                          _vm._v(" "),
                          _c("b-col", { attrs: { lg: "3", md: "6" } }, [
                            _c(
                              "button",
                              {
                                directives: [
                                  {
                                    name: "clipboard",
                                    rawName: "v-clipboard:copy",
                                    value: "ni ni-settings-gear-65",
                                    expression: "'ni ni-settings-gear-65'",
                                    arg: "copy"
                                  },
                                  {
                                    name: "clipboard",
                                    rawName: "v-clipboard:success",
                                    value: _vm.onCopy,
                                    expression: "onCopy",
                                    arg: "success"
                                  }
                                ],
                                staticClass: "btn-icon-clipboard",
                                attrs: {
                                  type: "button",
                                  title: "",
                                  "data-original-title": "Copy to clipboard"
                                }
                              },
                              [
                                _c("div", [
                                  _c("i", {
                                    staticClass: "ni ni-settings-gear-65"
                                  }),
                                  _vm._v(" "),
                                  _c("span", [_vm._v("settings-gear-65")])
                                ])
                              ]
                            )
                          ]),
                          _vm._v(" "),
                          _c("b-col", { attrs: { lg: "3", md: "6" } }, [
                            _c(
                              "button",
                              {
                                directives: [
                                  {
                                    name: "clipboard",
                                    rawName: "v-clipboard:copy",
                                    value: "ni ni-settings",
                                    expression: "'ni ni-settings'",
                                    arg: "copy"
                                  },
                                  {
                                    name: "clipboard",
                                    rawName: "v-clipboard:success",
                                    value: _vm.onCopy,
                                    expression: "onCopy",
                                    arg: "success"
                                  }
                                ],
                                staticClass: "btn-icon-clipboard",
                                attrs: {
                                  type: "button",
                                  title: "",
                                  "data-original-title": "Copy to clipboard"
                                }
                              },
                              [
                                _c("div", [
                                  _c("i", { staticClass: "ni ni-settings" }),
                                  _vm._v(" "),
                                  _c("span", [_vm._v("settings")])
                                ])
                              ]
                            )
                          ]),
                          _vm._v(" "),
                          _c("b-col", { attrs: { lg: "3", md: "6" } }, [
                            _c(
                              "button",
                              {
                                directives: [
                                  {
                                    name: "clipboard",
                                    rawName: "v-clipboard:copy",
                                    value: "ni ni-single-02",
                                    expression: "'ni ni-single-02'",
                                    arg: "copy"
                                  },
                                  {
                                    name: "clipboard",
                                    rawName: "v-clipboard:success",
                                    value: _vm.onCopy,
                                    expression: "onCopy",
                                    arg: "success"
                                  }
                                ],
                                staticClass: "btn-icon-clipboard",
                                attrs: {
                                  type: "button",
                                  title: "",
                                  "data-original-title": "Copy to clipboard"
                                }
                              },
                              [
                                _c("div", [
                                  _c("i", { staticClass: "ni ni-single-02" }),
                                  _vm._v(" "),
                                  _c("span", [_vm._v("single-02")])
                                ])
                              ]
                            )
                          ]),
                          _vm._v(" "),
                          _c("b-col", { attrs: { lg: "3", md: "6" } }, [
                            _c(
                              "button",
                              {
                                directives: [
                                  {
                                    name: "clipboard",
                                    rawName: "v-clipboard:copy",
                                    value: "ni ni-single-copy-04",
                                    expression: "'ni ni-single-copy-04'",
                                    arg: "copy"
                                  },
                                  {
                                    name: "clipboard",
                                    rawName: "v-clipboard:success",
                                    value: _vm.onCopy,
                                    expression: "onCopy",
                                    arg: "success"
                                  }
                                ],
                                staticClass: "btn-icon-clipboard",
                                attrs: {
                                  type: "button",
                                  title: "",
                                  "data-original-title": "Copy to clipboard"
                                }
                              },
                              [
                                _c("div", [
                                  _c("i", {
                                    staticClass: "ni ni-single-copy-04"
                                  }),
                                  _vm._v(" "),
                                  _c("span", [_vm._v("single-copy-04")])
                                ])
                              ]
                            )
                          ]),
                          _vm._v(" "),
                          _c("b-col", { attrs: { lg: "3", md: "6" } }, [
                            _c(
                              "button",
                              {
                                directives: [
                                  {
                                    name: "clipboard",
                                    rawName: "v-clipboard:copy",
                                    value: "ni ni-sound-wave",
                                    expression: "'ni ni-sound-wave'",
                                    arg: "copy"
                                  },
                                  {
                                    name: "clipboard",
                                    rawName: "v-clipboard:success",
                                    value: _vm.onCopy,
                                    expression: "onCopy",
                                    arg: "success"
                                  }
                                ],
                                staticClass: "btn-icon-clipboard",
                                attrs: {
                                  type: "button",
                                  title: "",
                                  "data-original-title": "Copy to clipboard"
                                }
                              },
                              [
                                _c("div", [
                                  _c("i", { staticClass: "ni ni-sound-wave" }),
                                  _vm._v(" "),
                                  _c("span", [_vm._v("sound-wave")])
                                ])
                              ]
                            )
                          ]),
                          _vm._v(" "),
                          _c("b-col", { attrs: { lg: "3", md: "6" } }, [
                            _c(
                              "button",
                              {
                                directives: [
                                  {
                                    name: "clipboard",
                                    rawName: "v-clipboard:copy",
                                    value: "ni ni-spaceship",
                                    expression: "'ni ni-spaceship'",
                                    arg: "copy"
                                  },
                                  {
                                    name: "clipboard",
                                    rawName: "v-clipboard:success",
                                    value: _vm.onCopy,
                                    expression: "onCopy",
                                    arg: "success"
                                  }
                                ],
                                staticClass: "btn-icon-clipboard",
                                attrs: {
                                  type: "button",
                                  title: "",
                                  "data-original-title": "Copy to clipboard"
                                }
                              },
                              [
                                _c("div", [
                                  _c("i", { staticClass: "ni ni-spaceship" }),
                                  _vm._v(" "),
                                  _c("span", [_vm._v("spaceship")])
                                ])
                              ]
                            )
                          ]),
                          _vm._v(" "),
                          _c("b-col", { attrs: { lg: "3", md: "6" } }, [
                            _c(
                              "button",
                              {
                                directives: [
                                  {
                                    name: "clipboard",
                                    rawName: "v-clipboard:copy",
                                    value: "ni ni-square-pin",
                                    expression: "'ni ni-square-pin'",
                                    arg: "copy"
                                  },
                                  {
                                    name: "clipboard",
                                    rawName: "v-clipboard:success",
                                    value: _vm.onCopy,
                                    expression: "onCopy",
                                    arg: "success"
                                  }
                                ],
                                staticClass: "btn-icon-clipboard",
                                attrs: {
                                  type: "button",
                                  title: "",
                                  "data-original-title": "Copy to clipboard"
                                }
                              },
                              [
                                _c("div", [
                                  _c("i", { staticClass: "ni ni-square-pin" }),
                                  _vm._v(" "),
                                  _c("span", [_vm._v("square-pin")])
                                ])
                              ]
                            )
                          ]),
                          _vm._v(" "),
                          _c("b-col", { attrs: { lg: "3", md: "6" } }, [
                            _c(
                              "button",
                              {
                                directives: [
                                  {
                                    name: "clipboard",
                                    rawName: "v-clipboard:copy",
                                    value: "ni ni-support-16",
                                    expression: "'ni ni-support-16'",
                                    arg: "copy"
                                  },
                                  {
                                    name: "clipboard",
                                    rawName: "v-clipboard:success",
                                    value: _vm.onCopy,
                                    expression: "onCopy",
                                    arg: "success"
                                  }
                                ],
                                staticClass: "btn-icon-clipboard",
                                attrs: {
                                  type: "button",
                                  title: "",
                                  "data-original-title": "Copy to clipboard"
                                }
                              },
                              [
                                _c("div", [
                                  _c("i", { staticClass: "ni ni-support-16" }),
                                  _vm._v(" "),
                                  _c("span", [_vm._v("support-16")])
                                ])
                              ]
                            )
                          ]),
                          _vm._v(" "),
                          _c("b-col", { attrs: { lg: "3", md: "6" } }, [
                            _c(
                              "button",
                              {
                                directives: [
                                  {
                                    name: "clipboard",
                                    rawName: "v-clipboard:copy",
                                    value: "ni ni-tablet-button",
                                    expression: "'ni ni-tablet-button'",
                                    arg: "copy"
                                  },
                                  {
                                    name: "clipboard",
                                    rawName: "v-clipboard:success",
                                    value: _vm.onCopy,
                                    expression: "onCopy",
                                    arg: "success"
                                  }
                                ],
                                staticClass: "btn-icon-clipboard",
                                attrs: {
                                  type: "button",
                                  title: "",
                                  "data-original-title": "Copy to clipboard"
                                }
                              },
                              [
                                _c("div", [
                                  _c("i", {
                                    staticClass: "ni ni-tablet-button"
                                  }),
                                  _vm._v(" "),
                                  _c("span", [_vm._v("tablet-button")])
                                ])
                              ]
                            )
                          ]),
                          _vm._v(" "),
                          _c("b-col", { attrs: { lg: "3", md: "6" } }, [
                            _c(
                              "button",
                              {
                                directives: [
                                  {
                                    name: "clipboard",
                                    rawName: "v-clipboard:copy",
                                    value: "ni ni-tag",
                                    expression: "'ni ni-tag'",
                                    arg: "copy"
                                  },
                                  {
                                    name: "clipboard",
                                    rawName: "v-clipboard:success",
                                    value: _vm.onCopy,
                                    expression: "onCopy",
                                    arg: "success"
                                  }
                                ],
                                staticClass: "btn-icon-clipboard",
                                attrs: {
                                  type: "button",
                                  title: "",
                                  "data-original-title": "Copy to clipboard"
                                }
                              },
                              [
                                _c("div", [
                                  _c("i", { staticClass: "ni ni-tag" }),
                                  _vm._v(" "),
                                  _c("span", [_vm._v("tag")])
                                ])
                              ]
                            )
                          ]),
                          _vm._v(" "),
                          _c("b-col", { attrs: { lg: "3", md: "6" } }, [
                            _c(
                              "button",
                              {
                                directives: [
                                  {
                                    name: "clipboard",
                                    rawName: "v-clipboard:copy",
                                    value: "ni ni-tie-bow",
                                    expression: "'ni ni-tie-bow'",
                                    arg: "copy"
                                  },
                                  {
                                    name: "clipboard",
                                    rawName: "v-clipboard:success",
                                    value: _vm.onCopy,
                                    expression: "onCopy",
                                    arg: "success"
                                  }
                                ],
                                staticClass: "btn-icon-clipboard",
                                attrs: {
                                  type: "button",
                                  title: "",
                                  "data-original-title": "Copy to clipboard"
                                }
                              },
                              [
                                _c("div", [
                                  _c("i", { staticClass: "ni ni-tie-bow" }),
                                  _vm._v(" "),
                                  _c("span", [_vm._v("tie-bow")])
                                ])
                              ]
                            )
                          ]),
                          _vm._v(" "),
                          _c("b-col", { attrs: { lg: "3", md: "6" } }, [
                            _c(
                              "button",
                              {
                                directives: [
                                  {
                                    name: "clipboard",
                                    rawName: "v-clipboard:copy",
                                    value: "ni ni-time-alarm",
                                    expression: "'ni ni-time-alarm'",
                                    arg: "copy"
                                  },
                                  {
                                    name: "clipboard",
                                    rawName: "v-clipboard:success",
                                    value: _vm.onCopy,
                                    expression: "onCopy",
                                    arg: "success"
                                  }
                                ],
                                staticClass: "btn-icon-clipboard",
                                attrs: {
                                  type: "button",
                                  title: "",
                                  "data-original-title": "Copy to clipboard"
                                }
                              },
                              [
                                _c("div", [
                                  _c("i", { staticClass: "ni ni-time-alarm" }),
                                  _vm._v(" "),
                                  _c("span", [_vm._v("time-alarm")])
                                ])
                              ]
                            )
                          ]),
                          _vm._v(" "),
                          _c("b-col", { attrs: { lg: "3", md: "6" } }, [
                            _c(
                              "button",
                              {
                                directives: [
                                  {
                                    name: "clipboard",
                                    rawName: "v-clipboard:copy",
                                    value: "ni ni-trophy",
                                    expression: "'ni ni-trophy'",
                                    arg: "copy"
                                  },
                                  {
                                    name: "clipboard",
                                    rawName: "v-clipboard:success",
                                    value: _vm.onCopy,
                                    expression: "onCopy",
                                    arg: "success"
                                  }
                                ],
                                staticClass: "btn-icon-clipboard",
                                attrs: {
                                  type: "button",
                                  title: "",
                                  "data-original-title": "Copy to clipboard"
                                }
                              },
                              [
                                _c("div", [
                                  _c("i", { staticClass: "ni ni-trophy" }),
                                  _vm._v(" "),
                                  _c("span", [_vm._v("trophy")])
                                ])
                              ]
                            )
                          ]),
                          _vm._v(" "),
                          _c("b-col", { attrs: { lg: "3", md: "6" } }, [
                            _c(
                              "button",
                              {
                                directives: [
                                  {
                                    name: "clipboard",
                                    rawName: "v-clipboard:copy",
                                    value: "ni ni-tv-2",
                                    expression: "'ni ni-tv-2'",
                                    arg: "copy"
                                  },
                                  {
                                    name: "clipboard",
                                    rawName: "v-clipboard:success",
                                    value: _vm.onCopy,
                                    expression: "onCopy",
                                    arg: "success"
                                  }
                                ],
                                staticClass: "btn-icon-clipboard",
                                attrs: {
                                  type: "button",
                                  title: "",
                                  "data-original-title": "Copy to clipboard"
                                }
                              },
                              [
                                _c("div", [
                                  _c("i", { staticClass: "ni ni-tv-2" }),
                                  _vm._v(" "),
                                  _c("span", [_vm._v("tv-2")])
                                ])
                              ]
                            )
                          ]),
                          _vm._v(" "),
                          _c("b-col", { attrs: { lg: "3", md: "6" } }, [
                            _c(
                              "button",
                              {
                                directives: [
                                  {
                                    name: "clipboard",
                                    rawName: "v-clipboard:copy",
                                    value: "ni ni-umbrella-13",
                                    expression: "'ni ni-umbrella-13'",
                                    arg: "copy"
                                  },
                                  {
                                    name: "clipboard",
                                    rawName: "v-clipboard:success",
                                    value: _vm.onCopy,
                                    expression: "onCopy",
                                    arg: "success"
                                  }
                                ],
                                staticClass: "btn-icon-clipboard",
                                attrs: {
                                  type: "button",
                                  title: "",
                                  "data-original-title": "Copy to clipboard"
                                }
                              },
                              [
                                _c("div", [
                                  _c("i", { staticClass: "ni ni-umbrella-13" }),
                                  _vm._v(" "),
                                  _c("span", [_vm._v("umbrella-13")])
                                ])
                              ]
                            )
                          ]),
                          _vm._v(" "),
                          _c("b-col", { attrs: { lg: "3", md: "6" } }, [
                            _c(
                              "button",
                              {
                                directives: [
                                  {
                                    name: "clipboard",
                                    rawName: "v-clipboard:copy",
                                    value: "ni ni-user-run",
                                    expression: "'ni ni-user-run'",
                                    arg: "copy"
                                  },
                                  {
                                    name: "clipboard",
                                    rawName: "v-clipboard:success",
                                    value: _vm.onCopy,
                                    expression: "onCopy",
                                    arg: "success"
                                  }
                                ],
                                staticClass: "btn-icon-clipboard",
                                attrs: {
                                  type: "button",
                                  title: "",
                                  "data-original-title": "Copy to clipboard"
                                }
                              },
                              [
                                _c("div", [
                                  _c("i", { staticClass: "ni ni-user-run" }),
                                  _vm._v(" "),
                                  _c("span", [_vm._v("user-run")])
                                ])
                              ]
                            )
                          ]),
                          _vm._v(" "),
                          _c("b-col", { attrs: { lg: "3", md: "6" } }, [
                            _c(
                              "button",
                              {
                                directives: [
                                  {
                                    name: "clipboard",
                                    rawName: "v-clipboard:copy",
                                    value: "ni ni-vector",
                                    expression: "'ni ni-vector'",
                                    arg: "copy"
                                  },
                                  {
                                    name: "clipboard",
                                    rawName: "v-clipboard:success",
                                    value: _vm.onCopy,
                                    expression: "onCopy",
                                    arg: "success"
                                  }
                                ],
                                staticClass: "btn-icon-clipboard",
                                attrs: {
                                  type: "button",
                                  title: "",
                                  "data-original-title": "Copy to clipboard"
                                }
                              },
                              [
                                _c("div", [
                                  _c("i", { staticClass: "ni ni-vector" }),
                                  _vm._v(" "),
                                  _c("span", [_vm._v("vector")])
                                ])
                              ]
                            )
                          ]),
                          _vm._v(" "),
                          _c("b-col", { attrs: { lg: "3", md: "6" } }, [
                            _c(
                              "button",
                              {
                                directives: [
                                  {
                                    name: "clipboard",
                                    rawName: "v-clipboard:copy",
                                    value: "ni ni-watch-time",
                                    expression: "'ni ni-watch-time'",
                                    arg: "copy"
                                  },
                                  {
                                    name: "clipboard",
                                    rawName: "v-clipboard:success",
                                    value: _vm.onCopy,
                                    expression: "onCopy",
                                    arg: "success"
                                  }
                                ],
                                staticClass: "btn-icon-clipboard",
                                attrs: {
                                  type: "button",
                                  title: "",
                                  "data-original-title": "Copy to clipboard"
                                }
                              },
                              [
                                _c("div", [
                                  _c("i", { staticClass: "ni ni-watch-time" }),
                                  _vm._v(" "),
                                  _c("span", [_vm._v("watch-time")])
                                ])
                              ]
                            )
                          ]),
                          _vm._v(" "),
                          _c("b-col", { attrs: { lg: "3", md: "6" } }, [
                            _c(
                              "button",
                              {
                                directives: [
                                  {
                                    name: "clipboard",
                                    rawName: "v-clipboard:copy",
                                    value: "ni ni-world",
                                    expression: "'ni ni-world'",
                                    arg: "copy"
                                  },
                                  {
                                    name: "clipboard",
                                    rawName: "v-clipboard:success",
                                    value: _vm.onCopy,
                                    expression: "onCopy",
                                    arg: "success"
                                  }
                                ],
                                staticClass: "btn-icon-clipboard",
                                attrs: {
                                  type: "button",
                                  title: "",
                                  "data-original-title": "Copy to clipboard"
                                }
                              },
                              [
                                _c("div", [
                                  _c("i", { staticClass: "ni ni-world" }),
                                  _vm._v(" "),
                                  _c("span", [_vm._v("world")])
                                ])
                              ]
                            )
                          ]),
                          _vm._v(" "),
                          _c("b-col", { attrs: { lg: "3", md: "6" } }, [
                            _c(
                              "button",
                              {
                                directives: [
                                  {
                                    name: "clipboard",
                                    rawName: "v-clipboard:copy",
                                    value: "ni ni-zoom-split-in",
                                    expression: "'ni ni-zoom-split-in'",
                                    arg: "copy"
                                  },
                                  {
                                    name: "clipboard",
                                    rawName: "v-clipboard:success",
                                    value: _vm.onCopy,
                                    expression: "onCopy",
                                    arg: "success"
                                  }
                                ],
                                staticClass: "btn-icon-clipboard",
                                attrs: {
                                  type: "button",
                                  title: "",
                                  "data-original-title": "Copy to clipboard"
                                }
                              },
                              [
                                _c("div", [
                                  _c("i", {
                                    staticClass: "ni ni-zoom-split-in"
                                  }),
                                  _vm._v(" "),
                                  _c("span", [_vm._v("zoom-split-in")])
                                ])
                              ]
                            )
                          ]),
                          _vm._v(" "),
                          _c("b-col", { attrs: { lg: "3", md: "6" } }, [
                            _c(
                              "button",
                              {
                                directives: [
                                  {
                                    name: "clipboard",
                                    rawName: "v-clipboard:copy",
                                    value: "ni ni-collection",
                                    expression: "'ni ni-collection'",
                                    arg: "copy"
                                  },
                                  {
                                    name: "clipboard",
                                    rawName: "v-clipboard:success",
                                    value: _vm.onCopy,
                                    expression: "onCopy",
                                    arg: "success"
                                  }
                                ],
                                staticClass: "btn-icon-clipboard",
                                attrs: {
                                  type: "button",
                                  title: "",
                                  "data-original-title": "Copy to clipboard"
                                }
                              },
                              [
                                _c("div", [
                                  _c("i", { staticClass: "ni ni-collection" }),
                                  _vm._v(" "),
                                  _c("span", [_vm._v("collection")])
                                ])
                              ]
                            )
                          ]),
                          _vm._v(" "),
                          _c("b-col", { attrs: { lg: "3", md: "6" } }, [
                            _c(
                              "button",
                              {
                                directives: [
                                  {
                                    name: "clipboard",
                                    rawName: "v-clipboard:copy",
                                    value: "ni ni-image",
                                    expression: "'ni ni-image'",
                                    arg: "copy"
                                  },
                                  {
                                    name: "clipboard",
                                    rawName: "v-clipboard:success",
                                    value: _vm.onCopy,
                                    expression: "onCopy",
                                    arg: "success"
                                  }
                                ],
                                staticClass: "btn-icon-clipboard",
                                attrs: {
                                  type: "button",
                                  title: "",
                                  "data-original-title": "Copy to clipboard"
                                }
                              },
                              [
                                _c("div", [
                                  _c("i", { staticClass: "ni ni-image" }),
                                  _vm._v(" "),
                                  _c("span", [_vm._v("image")])
                                ])
                              ]
                            )
                          ]),
                          _vm._v(" "),
                          _c("b-col", { attrs: { lg: "3", md: "6" } }, [
                            _c(
                              "button",
                              {
                                directives: [
                                  {
                                    name: "clipboard",
                                    rawName: "v-clipboard:copy",
                                    value: "ni ni-shop",
                                    expression: "'ni ni-shop'",
                                    arg: "copy"
                                  },
                                  {
                                    name: "clipboard",
                                    rawName: "v-clipboard:success",
                                    value: _vm.onCopy,
                                    expression: "onCopy",
                                    arg: "success"
                                  }
                                ],
                                staticClass: "btn-icon-clipboard",
                                attrs: {
                                  type: "button",
                                  title: "",
                                  "data-original-title": "Copy to clipboard"
                                }
                              },
                              [
                                _c("div", [
                                  _c("i", { staticClass: "ni ni-shop" }),
                                  _vm._v(" "),
                                  _c("span", [_vm._v("shop")])
                                ])
                              ]
                            )
                          ]),
                          _vm._v(" "),
                          _c("b-col", { attrs: { lg: "3", md: "6" } }, [
                            _c(
                              "button",
                              {
                                directives: [
                                  {
                                    name: "clipboard",
                                    rawName: "v-clipboard:copy",
                                    value: "ni ni-ungroup",
                                    expression: "'ni ni-ungroup'",
                                    arg: "copy"
                                  },
                                  {
                                    name: "clipboard",
                                    rawName: "v-clipboard:success",
                                    value: _vm.onCopy,
                                    expression: "onCopy",
                                    arg: "success"
                                  }
                                ],
                                staticClass: "btn-icon-clipboard",
                                attrs: {
                                  type: "button",
                                  title: "",
                                  "data-original-title": "Copy to clipboard"
                                }
                              },
                              [
                                _c("div", [
                                  _c("i", { staticClass: "ni ni-ungroup" }),
                                  _vm._v(" "),
                                  _c("span", [_vm._v("ungroup")])
                                ])
                              ]
                            )
                          ]),
                          _vm._v(" "),
                          _c("b-col", { attrs: { lg: "3", md: "6" } }, [
                            _c(
                              "button",
                              {
                                directives: [
                                  {
                                    name: "clipboard",
                                    rawName: "v-clipboard:copy",
                                    value: "ni ni-world-2",
                                    expression: "'ni ni-world-2'",
                                    arg: "copy"
                                  },
                                  {
                                    name: "clipboard",
                                    rawName: "v-clipboard:success",
                                    value: _vm.onCopy,
                                    expression: "onCopy",
                                    arg: "success"
                                  }
                                ],
                                staticClass: "btn-icon-clipboard",
                                attrs: {
                                  type: "button",
                                  title: "",
                                  "data-original-title": "Copy to clipboard"
                                }
                              },
                              [
                                _c("div", [
                                  _c("i", { staticClass: "ni ni-world-2" }),
                                  _vm._v(" "),
                                  _c("span", [_vm._v("world-2")])
                                ])
                              ]
                            )
                          ]),
                          _vm._v(" "),
                          _c("b-col", { attrs: { lg: "3", md: "6" } }, [
                            _c(
                              "button",
                              {
                                directives: [
                                  {
                                    name: "clipboard",
                                    rawName: "v-clipboard:copy",
                                    value: "ni ni-ui-04",
                                    expression: "'ni ni-ui-04'",
                                    arg: "copy"
                                  },
                                  {
                                    name: "clipboard",
                                    rawName: "v-clipboard:success",
                                    value: _vm.onCopy,
                                    expression: "onCopy",
                                    arg: "success"
                                  }
                                ],
                                staticClass: "btn-icon-clipboard",
                                attrs: {
                                  type: "button",
                                  title: "",
                                  "data-original-title": "Copy to clipboard"
                                }
                              },
                              [
                                _c("div", [
                                  _c("i", { staticClass: "ni ni-ui-04" }),
                                  _vm._v(" "),
                                  _c("span", [_vm._v("ui-04")])
                                ])
                              ]
                            )
                          ])
                        ],
                        1
                      )
                    ],
                    1
                  )
                ],
                1
              )
            ],
            1
          )
        ],
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Pages/Login.vue?vue&type=template&id=4f3b21ef&":
/*!*********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/Pages/Login.vue?vue&type=template&id=4f3b21ef& ***!
  \*********************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    [
      _c(
        "div",
        { staticClass: "header bg-gradient-success py-7 py-lg-8 pt-lg-9" },
        [
          _c("b-container", [
            _c(
              "div",
              { staticClass: "header-body text-center mb-7" },
              [
                _c(
                  "b-row",
                  { staticClass: "justify-content-center" },
                  [
                    _c(
                      "b-col",
                      {
                        staticClass: "px-5",
                        attrs: { xl: "5", lg: "6", md: "8" }
                      },
                      [
                        _c("h1", { staticClass: "text-white" }, [
                          _vm._v("Welcome!")
                        ]),
                        _vm._v(" "),
                        _c("p", { staticClass: "text-lead text-white" }, [
                          _vm._v(
                            "Use these awesome forms to login or create new account in your project for\n              free."
                          )
                        ])
                      ]
                    )
                  ],
                  1
                )
              ],
              1
            )
          ]),
          _vm._v(" "),
          _c(
            "div",
            {
              staticClass:
                "separator separator-bottom separator-skew zindex-100"
            },
            [
              _c(
                "svg",
                {
                  attrs: {
                    x: "0",
                    y: "0",
                    viewBox: "0 0 2560 100",
                    preserveAspectRatio: "none",
                    version: "1.1",
                    xmlns: "http://www.w3.org/2000/svg"
                  }
                },
                [
                  _c("polygon", {
                    staticClass: "fill-default",
                    attrs: { points: "2560 0 2560 100 0 100" }
                  })
                ]
              )
            ]
          )
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "b-container",
        { staticClass: "mt--8 pb-5" },
        [
          _c(
            "b-row",
            { staticClass: "justify-content-center" },
            [
              _c(
                "b-col",
                { attrs: { lg: "5", md: "7" } },
                [
                  _c(
                    "b-card",
                    {
                      staticClass: "bg-secondary border-0 mb-0",
                      attrs: { "no-body": "" }
                    },
                    [
                      _c(
                        "b-card-header",
                        { staticClass: "bg-transparent pb-5" },
                        [
                          _c(
                            "div",
                            { staticClass: "text-muted text-center mt-2 mb-3" },
                            [_c("small", [_vm._v("Sign in with")])]
                          ),
                          _vm._v(" "),
                          _c(
                            "div",
                            { staticClass: "btn-wrapper text-center" },
                            [
                              _c(
                                "a",
                                {
                                  staticClass: "btn btn-neutral btn-icon",
                                  attrs: { href: "#" }
                                },
                                [
                                  _c(
                                    "span",
                                    { staticClass: "btn-inner--icon" },
                                    [
                                      _c("img", {
                                        attrs: {
                                          src: "img/icons/common/github.svg"
                                        }
                                      })
                                    ]
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "span",
                                    { staticClass: "btn-inner--text" },
                                    [_vm._v("Github")]
                                  )
                                ]
                              ),
                              _vm._v(" "),
                              _c(
                                "a",
                                {
                                  staticClass: "btn btn-neutral btn-icon",
                                  attrs: { href: "#" }
                                },
                                [
                                  _c(
                                    "span",
                                    { staticClass: "btn-inner--icon" },
                                    [
                                      _c("img", {
                                        attrs: {
                                          src: "img/icons/common/google.svg"
                                        }
                                      })
                                    ]
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "span",
                                    { staticClass: "btn-inner--text" },
                                    [_vm._v("Google")]
                                  )
                                ]
                              )
                            ]
                          )
                        ]
                      ),
                      _vm._v(" "),
                      _c(
                        "b-card-body",
                        { staticClass: "px-lg-5 py-lg-5" },
                        [
                          _c(
                            "div",
                            { staticClass: "text-center text-muted mb-4" },
                            [
                              _c("small", [
                                _vm._v("Or sign in with credentials")
                              ])
                            ]
                          ),
                          _vm._v(" "),
                          _c("validation-observer", {
                            ref: "formValidator",
                            scopedSlots: _vm._u([
                              {
                                key: "default",
                                fn: function(ref) {
                                  var handleSubmit = ref.handleSubmit
                                  return [
                                    _c(
                                      "b-form",
                                      {
                                        attrs: { role: "form" },
                                        on: {
                                          submit: function($event) {
                                            $event.preventDefault()
                                            return handleSubmit(_vm.onSubmit)
                                          }
                                        }
                                      },
                                      [
                                        _c("base-input", {
                                          staticClass: "mb-3",
                                          attrs: {
                                            alternative: "",
                                            name: "Email",
                                            rules: {
                                              required: true,
                                              email: true
                                            },
                                            "prepend-icon": "ni ni-email-83",
                                            placeholder: "Email"
                                          },
                                          model: {
                                            value: _vm.model.email,
                                            callback: function($$v) {
                                              _vm.$set(_vm.model, "email", $$v)
                                            },
                                            expression: "model.email"
                                          }
                                        }),
                                        _vm._v(" "),
                                        _c("base-input", {
                                          staticClass: "mb-3",
                                          attrs: {
                                            alternative: "",
                                            name: "Password",
                                            rules: { required: true, min: 6 },
                                            "prepend-icon":
                                              "ni ni-lock-circle-open",
                                            type: "password",
                                            placeholder: "Password"
                                          },
                                          model: {
                                            value: _vm.model.password,
                                            callback: function($$v) {
                                              _vm.$set(
                                                _vm.model,
                                                "password",
                                                $$v
                                              )
                                            },
                                            expression: "model.password"
                                          }
                                        }),
                                        _vm._v(" "),
                                        _c(
                                          "b-form-checkbox",
                                          {
                                            model: {
                                              value: _vm.model.rememberMe,
                                              callback: function($$v) {
                                                _vm.$set(
                                                  _vm.model,
                                                  "rememberMe",
                                                  $$v
                                                )
                                              },
                                              expression: "model.rememberMe"
                                            }
                                          },
                                          [_vm._v("Remember me")]
                                        ),
                                        _vm._v(" "),
                                        _c(
                                          "div",
                                          { staticClass: "text-center" },
                                          [
                                            _c(
                                              "base-button",
                                              {
                                                staticClass: "my-4",
                                                attrs: {
                                                  type: "primary",
                                                  "native-type": "submit"
                                                }
                                              },
                                              [_vm._v("Sign in")]
                                            )
                                          ],
                                          1
                                        )
                                      ],
                                      1
                                    )
                                  ]
                                }
                              }
                            ])
                          })
                        ],
                        1
                      )
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "b-row",
                    { staticClass: "mt-3" },
                    [
                      _c(
                        "b-col",
                        { attrs: { cols: "6" } },
                        [
                          _c(
                            "router-link",
                            {
                              staticClass: "text-light",
                              attrs: { to: "/dashboard" }
                            },
                            [_c("small", [_vm._v("Forgot password?")])]
                          )
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "b-col",
                        { staticClass: "text-right", attrs: { cols: "6" } },
                        [
                          _c(
                            "router-link",
                            {
                              staticClass: "text-light",
                              attrs: { to: "/register" }
                            },
                            [_c("small", [_vm._v("Create new account")])]
                          )
                        ],
                        1
                      )
                    ],
                    1
                  )
                ],
                1
              )
            ],
            1
          )
        ],
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Pages/Register.vue?vue&type=template&id=1eba06e6&":
/*!************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/Pages/Register.vue?vue&type=template&id=1eba06e6& ***!
  \************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    [
      _c(
        "div",
        { staticClass: "header bg-gradient-success py-7 py-lg-8 pt-lg-9" },
        [
          _c("b-container", { staticClass: "container" }, [
            _c(
              "div",
              { staticClass: "header-body text-center mb-7" },
              [
                _c(
                  "b-row",
                  { staticClass: "justify-content-center" },
                  [
                    _c(
                      "b-col",
                      {
                        staticClass: "px-5",
                        attrs: { xl: "5", lg: "6", md: "8" }
                      },
                      [
                        _c("h1", { staticClass: "text-white" }, [
                          _vm._v("Create an account")
                        ]),
                        _vm._v(" "),
                        _c("p", { staticClass: "text-lead text-white" }, [
                          _vm._v(
                            "Use these awesome forms to login or create new account in your project for\n              free."
                          )
                        ])
                      ]
                    )
                  ],
                  1
                )
              ],
              1
            )
          ]),
          _vm._v(" "),
          _c(
            "div",
            {
              staticClass:
                "separator separator-bottom separator-skew zindex-100"
            },
            [
              _c(
                "svg",
                {
                  attrs: {
                    x: "0",
                    y: "0",
                    viewBox: "0 0 2560 100",
                    preserveAspectRatio: "none",
                    version: "1.1",
                    xmlns: "http://www.w3.org/2000/svg"
                  }
                },
                [
                  _c("polygon", {
                    staticClass: "fill-default",
                    attrs: { points: "2560 0 2560 100 0 100" }
                  })
                ]
              )
            ]
          )
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "b-container",
        { staticClass: "mt--8 pb-5" },
        [
          _c(
            "b-row",
            { staticClass: "justify-content-center" },
            [
              _c(
                "b-col",
                { attrs: { lg: "6", md: "8" } },
                [
                  _c(
                    "b-card",
                    {
                      staticClass: "bg-secondary border-0",
                      attrs: { "no-body": "" }
                    },
                    [
                      _c(
                        "b-card-header",
                        { staticClass: "bg-transparent pb-5" },
                        [
                          _c(
                            "div",
                            { staticClass: "text-muted text-center mt-2 mb-4" },
                            [_c("small", [_vm._v("Sign up with")])]
                          ),
                          _vm._v(" "),
                          _c("div", { staticClass: "text-center" }, [
                            _c(
                              "a",
                              {
                                staticClass: "btn btn-neutral btn-icon mr-4",
                                attrs: { href: "#" }
                              },
                              [
                                _c("span", { staticClass: "btn-inner--icon" }, [
                                  _c("img", {
                                    attrs: {
                                      src: "img/icons/common/github.svg"
                                    }
                                  })
                                ]),
                                _vm._v(" "),
                                _c("span", { staticClass: "btn-inner--text" }, [
                                  _vm._v("Github")
                                ])
                              ]
                            ),
                            _vm._v(" "),
                            _c(
                              "a",
                              {
                                staticClass: "btn btn-neutral btn-icon",
                                attrs: { href: "#" }
                              },
                              [
                                _c("span", { staticClass: "btn-inner--icon" }, [
                                  _c("img", {
                                    attrs: {
                                      src: "img/icons/common/google.svg"
                                    }
                                  })
                                ]),
                                _vm._v(" "),
                                _c("span", { staticClass: "btn-inner--text" }, [
                                  _vm._v("Google")
                                ])
                              ]
                            )
                          ])
                        ]
                      ),
                      _vm._v(" "),
                      _c(
                        "b-card-body",
                        { staticClass: "px-lg-5 py-lg-5" },
                        [
                          _c(
                            "div",
                            { staticClass: "text-center text-muted mb-4" },
                            [
                              _c("small", [
                                _vm._v("Or sign up with credentials")
                              ])
                            ]
                          ),
                          _vm._v(" "),
                          _c("validation-observer", {
                            ref: "formValidator",
                            scopedSlots: _vm._u([
                              {
                                key: "default",
                                fn: function(ref) {
                                  var handleSubmit = ref.handleSubmit
                                  return [
                                    _c(
                                      "b-form",
                                      {
                                        attrs: { role: "form" },
                                        on: {
                                          submit: function($event) {
                                            $event.preventDefault()
                                            return handleSubmit(_vm.onSubmit)
                                          }
                                        }
                                      },
                                      [
                                        _c("base-input", {
                                          staticClass: "mb-3",
                                          attrs: {
                                            alternative: "",
                                            "prepend-icon": "ni ni-hat-3",
                                            placeholder: "Name",
                                            name: "Name",
                                            rules: { required: true }
                                          },
                                          model: {
                                            value: _vm.model.name,
                                            callback: function($$v) {
                                              _vm.$set(_vm.model, "name", $$v)
                                            },
                                            expression: "model.name"
                                          }
                                        }),
                                        _vm._v(" "),
                                        _c("base-input", {
                                          staticClass: "mb-3",
                                          attrs: {
                                            alternative: "",
                                            "prepend-icon": "ni ni-email-83",
                                            placeholder: "Email",
                                            name: "Email",
                                            rules: {
                                              required: true,
                                              email: true
                                            }
                                          },
                                          model: {
                                            value: _vm.model.email,
                                            callback: function($$v) {
                                              _vm.$set(_vm.model, "email", $$v)
                                            },
                                            expression: "model.email"
                                          }
                                        }),
                                        _vm._v(" "),
                                        _c("base-input", {
                                          staticClass: "mb-3",
                                          attrs: {
                                            alternative: "",
                                            "prepend-icon":
                                              "ni ni-lock-circle-open",
                                            placeholder: "password",
                                            type: "password",
                                            name: "Password",
                                            rules: { required: true, min: 6 }
                                          },
                                          model: {
                                            value: _vm.model.password,
                                            callback: function($$v) {
                                              _vm.$set(
                                                _vm.model,
                                                "password",
                                                $$v
                                              )
                                            },
                                            expression: "model.password"
                                          }
                                        }),
                                        _vm._v(" "),
                                        _c(
                                          "div",
                                          {
                                            staticClass:
                                              "text-muted font-italic"
                                          },
                                          [
                                            _c("small", [
                                              _vm._v("password strength: "),
                                              _c(
                                                "span",
                                                {
                                                  staticClass:
                                                    "text-success font-weight-700"
                                                },
                                                [_vm._v("strong")]
                                              )
                                            ])
                                          ]
                                        ),
                                        _vm._v(" "),
                                        _c(
                                          "b-row",
                                          { staticClass: " my-4" },
                                          [
                                            _c(
                                              "b-col",
                                              { attrs: { cols: "12" } },
                                              [
                                                _c(
                                                  "base-input",
                                                  {
                                                    attrs: {
                                                      rules: {
                                                        required: {
                                                          allowFalse: false
                                                        }
                                                      },
                                                      name: "Privacy",
                                                      Policy: ""
                                                    }
                                                  },
                                                  [
                                                    _c(
                                                      "b-form-checkbox",
                                                      {
                                                        model: {
                                                          value:
                                                            _vm.model.agree,
                                                          callback: function(
                                                            $$v
                                                          ) {
                                                            _vm.$set(
                                                              _vm.model,
                                                              "agree",
                                                              $$v
                                                            )
                                                          },
                                                          expression:
                                                            "model.agree"
                                                        }
                                                      },
                                                      [
                                                        _c(
                                                          "span",
                                                          {
                                                            staticClass:
                                                              "text-muted"
                                                          },
                                                          [
                                                            _vm._v(
                                                              "I agree with the "
                                                            ),
                                                            _c(
                                                              "a",
                                                              {
                                                                attrs: {
                                                                  href: "#!"
                                                                }
                                                              },
                                                              [
                                                                _vm._v(
                                                                  "Privacy Policy"
                                                                )
                                                              ]
                                                            )
                                                          ]
                                                        )
                                                      ]
                                                    )
                                                  ],
                                                  1
                                                )
                                              ],
                                              1
                                            )
                                          ],
                                          1
                                        ),
                                        _vm._v(" "),
                                        _c(
                                          "div",
                                          { staticClass: "text-center" },
                                          [
                                            _c(
                                              "b-button",
                                              {
                                                staticClass: "mt-4",
                                                attrs: {
                                                  type: "submit",
                                                  variant: "primary"
                                                }
                                              },
                                              [_vm._v("Create account")]
                                            )
                                          ],
                                          1
                                        )
                                      ],
                                      1
                                    )
                                  ]
                                }
                              }
                            ])
                          })
                        ],
                        1
                      )
                    ],
                    1
                  )
                ],
                1
              )
            ],
            1
          )
        ],
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Pages/UserProfile.vue?vue&type=template&id=83b5de38&":
/*!***************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/Pages/UserProfile.vue?vue&type=template&id=83b5de38& ***!
  \***************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    [
      _c(
        "div",
        {
          staticClass:
            "header pb-8 pt-5 pt-lg-8 d-flex align-items-center profile-header",
          staticStyle: {
            "min-height": "600px",
            "background-image": "url(img/theme/profile-cover.jpg)",
            "background-size": "cover",
            "background-position": "center top"
          }
        },
        [
          _c(
            "b-container",
            { attrs: { fluid: "" } },
            [
              _c("span", { staticClass: "mask bg-gradient-success opacity-8" }),
              _vm._v(" "),
              _c(
                "b-container",
                {
                  staticClass: "d-flex align-items-center",
                  attrs: { fluid: "" }
                },
                [
                  _c(
                    "b-row",
                    [
                      _c("b-col", { attrs: { lg: "7", md: "10" } }, [
                        _c("h1", { staticClass: "display-2 text-white" }, [
                          _vm._v("Hello Jesse")
                        ]),
                        _vm._v(" "),
                        _c("p", { staticClass: "text-white mt-0 mb-5" }, [
                          _vm._v(
                            "This is your profile page. You can see the progress you've made with your\n              work and manage your projects or assigned tasks"
                          )
                        ]),
                        _vm._v(" "),
                        _c(
                          "a",
                          {
                            staticClass: "btn btn-info",
                            attrs: { href: "#!" }
                          },
                          [_vm._v("Edit profile")]
                        )
                      ])
                    ],
                    1
                  )
                ],
                1
              )
            ],
            1
          )
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "b-container",
        { staticClass: "mt--6", attrs: { fluid: "" } },
        [
          _c(
            "b-row",
            [
              _c(
                "b-col",
                { staticClass: "order-xl-2 mb-5", attrs: { xl: "4" } },
                [_c("user-card")],
                1
              ),
              _vm._v(" "),
              _c(
                "b-col",
                { staticClass: "order-xl-1", attrs: { xl: "8" } },
                [_c("edit-profile-form")],
                1
              )
            ],
            1
          )
        ],
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Pages/UserProfile/EditProfileForm.vue?vue&type=template&id=231e9058&":
/*!*******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/Pages/UserProfile/EditProfileForm.vue?vue&type=template&id=231e9058& ***!
  \*******************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "card",
    [
      _c(
        "b-row",
        { attrs: { slot: "header", "align-v": "center" }, slot: "header" },
        [
          _c("b-col", { attrs: { cols: "8" } }, [
            _c("h3", { staticClass: "mb-0" }, [_vm._v("Edit profile ")])
          ]),
          _vm._v(" "),
          _c("b-col", { staticClass: "text-right", attrs: { cols: "4" } }, [
            _c(
              "a",
              { staticClass: "btn btn-sm btn-primary", attrs: { href: "#!" } },
              [_vm._v("Settings")]
            )
          ])
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "b-form",
        {
          on: {
            submit: function($event) {
              $event.preventDefault()
              return _vm.updateProfile($event)
            }
          }
        },
        [
          _c("h6", { staticClass: "heading-small text-muted mb-4" }, [
            _vm._v("User information")
          ]),
          _vm._v(" "),
          _c(
            "div",
            { staticClass: "pl-lg-4" },
            [
              _c(
                "b-row",
                [
                  _c(
                    "b-col",
                    { attrs: { lg: "6" } },
                    [
                      _c("base-input", {
                        attrs: {
                          type: "text",
                          label: "Username",
                          placeholder: "Username"
                        },
                        model: {
                          value: _vm.user.username,
                          callback: function($$v) {
                            _vm.$set(_vm.user, "username", $$v)
                          },
                          expression: "user.username"
                        }
                      })
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "b-col",
                    { attrs: { lg: "6" } },
                    [
                      _c("base-input", {
                        attrs: {
                          type: "email",
                          label: "Email address",
                          placeholder: "mike@email.com"
                        },
                        model: {
                          value: _vm.user.email,
                          callback: function($$v) {
                            _vm.$set(_vm.user, "email", $$v)
                          },
                          expression: "user.email"
                        }
                      })
                    ],
                    1
                  )
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "b-row",
                [
                  _c(
                    "b-col",
                    { attrs: { lg: "6" } },
                    [
                      _c("base-input", {
                        attrs: {
                          type: "text",
                          label: "First Name",
                          placeholder: "First Name"
                        },
                        model: {
                          value: _vm.user.firstName,
                          callback: function($$v) {
                            _vm.$set(_vm.user, "firstName", $$v)
                          },
                          expression: "user.firstName"
                        }
                      })
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "b-col",
                    { attrs: { lg: "6" } },
                    [
                      _c("base-input", {
                        attrs: {
                          type: "text",
                          label: "Last Name",
                          placeholder: "Last Name"
                        },
                        model: {
                          value: _vm.user.lastName,
                          callback: function($$v) {
                            _vm.$set(_vm.user, "lastName", $$v)
                          },
                          expression: "user.lastName"
                        }
                      })
                    ],
                    1
                  )
                ],
                1
              )
            ],
            1
          ),
          _vm._v(" "),
          _c("hr", { staticClass: "my-4" }),
          _vm._v(" "),
          _c("h6", { staticClass: "heading-small text-muted mb-4" }, [
            _vm._v("Contact information")
          ]),
          _vm._v(" "),
          _c(
            "div",
            { staticClass: "pl-lg-4" },
            [
              _c(
                "b-row",
                [
                  _c(
                    "b-col",
                    { attrs: { md: "12" } },
                    [
                      _c("base-input", {
                        attrs: {
                          type: "text",
                          label: "Address",
                          placeholder: "Home Address"
                        },
                        model: {
                          value: _vm.user.address,
                          callback: function($$v) {
                            _vm.$set(_vm.user, "address", $$v)
                          },
                          expression: "user.address"
                        }
                      })
                    ],
                    1
                  )
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "b-row",
                [
                  _c(
                    "b-col",
                    { attrs: { lg: "4" } },
                    [
                      _c("base-input", {
                        attrs: {
                          type: "text",
                          label: "City",
                          placeholder: "City"
                        },
                        model: {
                          value: _vm.user.city,
                          callback: function($$v) {
                            _vm.$set(_vm.user, "city", $$v)
                          },
                          expression: "user.city"
                        }
                      })
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "b-col",
                    { attrs: { lg: "4" } },
                    [
                      _c("base-input", {
                        attrs: {
                          type: "text",
                          label: "Country",
                          placeholder: "Country"
                        },
                        model: {
                          value: _vm.user.country,
                          callback: function($$v) {
                            _vm.$set(_vm.user, "country", $$v)
                          },
                          expression: "user.country"
                        }
                      })
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "b-col",
                    { attrs: { lg: "4" } },
                    [
                      _c("base-input", {
                        attrs: {
                          label: "Postal Code",
                          placeholder: "ZIP Code"
                        },
                        model: {
                          value: _vm.user.postalCode,
                          callback: function($$v) {
                            _vm.$set(_vm.user, "postalCode", $$v)
                          },
                          expression: "user.postalCode"
                        }
                      })
                    ],
                    1
                  )
                ],
                1
              )
            ],
            1
          ),
          _vm._v(" "),
          _c("hr", { staticClass: "my-4" }),
          _vm._v(" "),
          _c("h6", { staticClass: "heading-small text-muted mb-4" }, [
            _vm._v("About me")
          ]),
          _vm._v(" "),
          _c(
            "div",
            { staticClass: "pl-lg-4" },
            [
              _c(
                "b-form-group",
                {
                  staticClass: "mb-0",
                  attrs: {
                    label: "About Me",
                    "label-class": "form-control-label",
                    "label-for": "about-form-textaria"
                  }
                },
                [
                  _c("b-form-textarea", {
                    attrs: {
                      rows: "4",
                      value: "A beautiful premium dashboard for BootstrapVue.",
                      id: "about-form-textaria",
                      placeholder: "A few words about you ..."
                    }
                  })
                ],
                1
              )
            ],
            1
          )
        ]
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Pages/UserProfile/UserCard.vue?vue&type=template&id=548df796&":
/*!************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/Pages/UserProfile/UserCard.vue?vue&type=template&id=548df796& ***!
  \************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "b-card",
    {
      staticClass: "card-profile",
      attrs: { "no-body": "", alt: "Image placeholder", "img-top": "" }
    },
    [
      _c(
        "b-row",
        { staticClass: "justify-content-center" },
        [
          _c("b-col", { staticClass: "order-lg-2", attrs: { lg: "3" } }, [
            _c("div", { staticClass: "card-profile-image" }, [
              _c(
                "a",
                { attrs: { href: "#" } },
                [
                  _c("b-img", {
                    attrs: { src: "img/theme/team-4.jpg", rounded: "circle" }
                  })
                ],
                1
              )
            ])
          ])
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "b-card-header",
        { staticClass: "text-center border-0 pt-8 pt-md-4 pb-0 pb-md-4" },
        [
          _c("div", { staticClass: "d-flex justify-content-between" }, [
            _c(
              "a",
              { staticClass: "btn btn-sm btn-info mr-4", attrs: { href: "#" } },
              [_vm._v("Connect")]
            ),
            _vm._v(" "),
            _c(
              "a",
              {
                staticClass: "btn btn-sm btn-default float-right",
                attrs: { href: "#" }
              },
              [_vm._v("Message")]
            )
          ])
        ]
      ),
      _vm._v(" "),
      _c(
        "b-card-body",
        { staticClass: "pt-0" },
        [
          _c(
            "b-row",
            [
              _c("b-col", [
                _c(
                  "div",
                  {
                    staticClass:
                      "card-profile-stats d-flex justify-content-center mt-md-5"
                  },
                  [
                    _c("div", [
                      _c("span", { staticClass: "heading" }, [_vm._v("22")]),
                      _vm._v(" "),
                      _c("span", { staticClass: "description" }, [
                        _vm._v("Friends")
                      ])
                    ]),
                    _vm._v(" "),
                    _c("div", [
                      _c("span", { staticClass: "heading" }, [_vm._v("10")]),
                      _vm._v(" "),
                      _c("span", { staticClass: "description" }, [
                        _vm._v("Photos")
                      ])
                    ]),
                    _vm._v(" "),
                    _c("div", [
                      _c("span", { staticClass: "heading" }, [_vm._v("89")]),
                      _vm._v(" "),
                      _c("span", { staticClass: "description" }, [
                        _vm._v("Comments")
                      ])
                    ])
                  ]
                )
              ])
            ],
            1
          ),
          _vm._v(" "),
          _c("div", { staticClass: "text-center" }, [
            _c("h5", { staticClass: "h3" }, [
              _vm._v("\n        Jessica Jones"),
              _c("span", { staticClass: "font-weight-light" }, [_vm._v(", 27")])
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "h5 font-weight-300" }, [
              _c("i", { staticClass: "ni location_pin mr-2" }),
              _vm._v("Bucharest, Romania\n      ")
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "h5 mt-4" }, [
              _c("i", { staticClass: "ni business_briefcase-24 mr-2" }),
              _vm._v("Solution Manager - Creative Tim Officer\n      ")
            ]),
            _vm._v(" "),
            _c("div", [
              _c("i", { staticClass: "ni education_hat mr-2" }),
              _vm._v("University of Computer Science\n      ")
            ]),
            _vm._v(" "),
            _c("hr", { staticClass: "my-4" }),
            _vm._v(" "),
            _c("p", [
              _vm._v(
                "Ryan — the name taken by Melbourne-raised, Brooklyn-based Nick Murphy — writes, performs and records all of his own music."
              )
            ]),
            _vm._v(" "),
            _c("a", { attrs: { href: "#" } }, [_vm._v("Show more")])
          ])
        ],
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/RegularTables.vue?vue&type=template&id=b2782bdc&":
/*!***********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/RegularTables.vue?vue&type=template&id=b2782bdc& ***!
  \***********************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    [
      _c(
        "base-header",
        { staticClass: "pb-6 pb-8 pt-5 pt-md-8 bg-gradient-success" },
        [
          _c(
            "b-row",
            [
              _c(
                "b-col",
                { attrs: { xl: "3", md: "6" } },
                [
                  _c(
                    "stats-card",
                    {
                      staticClass: "mb-4",
                      attrs: {
                        title: "Total traffic",
                        type: "gradient-red",
                        "sub-title": "350,897",
                        icon: "ni ni-active-40"
                      }
                    },
                    [
                      _c("template", { slot: "footer" }, [
                        _c("span", { staticClass: "text-success mr-2" }, [
                          _vm._v("3.48%")
                        ]),
                        _vm._v(" "),
                        _c("span", { staticClass: "text-nowrap" }, [
                          _vm._v("Since last month")
                        ])
                      ])
                    ],
                    2
                  )
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "b-col",
                { attrs: { xl: "3", md: "6" } },
                [
                  _c(
                    "stats-card",
                    {
                      staticClass: "mb-4",
                      attrs: {
                        title: "Total traffic",
                        type: "gradient-orange",
                        "sub-title": "2,356",
                        icon: "ni ni-chart-pie-35"
                      }
                    },
                    [
                      _c("template", { slot: "footer" }, [
                        _c("span", { staticClass: "text-success mr-2" }, [
                          _vm._v("12.18%")
                        ]),
                        _vm._v(" "),
                        _c("span", { staticClass: "text-nowrap" }, [
                          _vm._v("Since last month")
                        ])
                      ])
                    ],
                    2
                  )
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "b-col",
                { attrs: { xl: "3", md: "6" } },
                [
                  _c(
                    "stats-card",
                    {
                      staticClass: "mb-4",
                      attrs: {
                        title: "Sales",
                        type: "gradient-green",
                        "sub-title": "924",
                        icon: "ni ni-money-coins"
                      }
                    },
                    [
                      _c("template", { slot: "footer" }, [
                        _c("span", { staticClass: "text-danger mr-2" }, [
                          _vm._v("5.72%")
                        ]),
                        _vm._v(" "),
                        _c("span", { staticClass: "text-nowrap" }, [
                          _vm._v("Since last month")
                        ])
                      ])
                    ],
                    2
                  )
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "b-col",
                { attrs: { xl: "3", md: "6" } },
                [
                  _c(
                    "stats-card",
                    {
                      staticClass: "mb-4",
                      attrs: {
                        title: "Performance",
                        type: "gradient-info",
                        "sub-title": "49,65%",
                        icon: "ni ni-chart-bar-32"
                      }
                    },
                    [
                      _c("template", { slot: "footer" }, [
                        _c("span", { staticClass: "text-success mr-2" }, [
                          _vm._v("54.8%")
                        ]),
                        _vm._v(" "),
                        _c("span", { staticClass: "text-nowrap" }, [
                          _vm._v("Since last month")
                        ])
                      ])
                    ],
                    2
                  )
                ],
                1
              )
            ],
            1
          )
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "b-container",
        { staticClass: "mt--7", attrs: { fluid: "" } },
        [
          _c("b-row", [_c("b-col", [_c("light-table")], 1)], 1),
          _vm._v(" "),
          _c("div", { staticClass: "mt-5" }),
          _vm._v(" "),
          _c("dark-table")
        ],
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Tables/RegularTables/DarkTable.vue?vue&type=template&id=57563d02&":
/*!****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/Tables/RegularTables/DarkTable.vue?vue&type=template&id=57563d02& ***!
  \****************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "b-card",
    { staticClass: "bg-default shadow", attrs: { "no-body": "" } },
    [
      _c("b-card-header", { staticClass: "bg-transparent border-0" }, [
        _c("h3", { staticClass: "mb-0 text-white" }, [_vm._v("Dark table")])
      ]),
      _vm._v(" "),
      _c(
        "el-table",
        {
          staticClass: "table-responsive table table-dark",
          attrs: { "header-row-class-name": "thead-dark", data: _vm.projects }
        },
        [
          _c("el-table-column", {
            attrs: { label: "Project", "min-width": "310px", prop: "name" },
            scopedSlots: _vm._u([
              {
                key: "default",
                fn: function(ref) {
                  var row = ref.row
                  return [
                    _c(
                      "b-media",
                      {
                        staticClass: "align-items-center",
                        attrs: { "no-body": "" }
                      },
                      [
                        _c(
                          "a",
                          { staticClass: "mr-3", attrs: { href: "#" } },
                          [
                            _c("b-img", {
                              staticClass: "avatar",
                              attrs: {
                                rounded: "circle",
                                alt: "Image placeholder",
                                src: row.img
                              }
                            })
                          ],
                          1
                        ),
                        _vm._v(" "),
                        _c("b-media-body", [
                          _c(
                            "span",
                            {
                              staticClass: "font-weight-600 name mb-0 text-sm"
                            },
                            [_vm._v(_vm._s(row.title))]
                          )
                        ])
                      ],
                      1
                    )
                  ]
                }
              }
            ])
          }),
          _vm._v(" "),
          _c("el-table-column", {
            attrs: { label: "Budget", prop: "budget", "min-width": "140px" }
          }),
          _vm._v(" "),
          _c("el-table-column", {
            attrs: { label: "Status", "min-width": "170px", prop: "status" },
            scopedSlots: _vm._u([
              {
                key: "default",
                fn: function(ref) {
                  var row = ref.row
                  return [
                    _c("badge", { staticClass: "badge-dot mr-4" }, [
                      _c("i", { class: "bg-" + row.statusType }),
                      _vm._v(" "),
                      _c(
                        "span",
                        {
                          staticClass: "status",
                          class: "text-" + row.statusType
                        },
                        [_vm._v(_vm._s(row.status))]
                      )
                    ])
                  ]
                }
              }
            ])
          }),
          _vm._v(" "),
          _c(
            "el-table-column",
            { attrs: { label: "Users", "min-width": "190px" } },
            [
              _c("div", { staticClass: "avatar-group" }, [
                _c(
                  "a",
                  {
                    staticClass: "avatar avatar-sm rounded-circle",
                    attrs: {
                      href: "#",
                      "data-toggle": "tooltip",
                      "data-original-title": "Ryan Tompson"
                    }
                  },
                  [
                    _c("img", {
                      attrs: {
                        alt: "Image placeholder",
                        src: "img/theme/team-1.jpg"
                      }
                    })
                  ]
                ),
                _vm._v(" "),
                _c(
                  "a",
                  {
                    staticClass: "avatar avatar-sm rounded-circle",
                    attrs: {
                      href: "#",
                      "data-toggle": "tooltip",
                      "data-original-title": "Romina Hadid"
                    }
                  },
                  [
                    _c("img", {
                      attrs: {
                        alt: "Image placeholder",
                        src: "img/theme/team-2.jpg"
                      }
                    })
                  ]
                ),
                _vm._v(" "),
                _c(
                  "a",
                  {
                    staticClass: "avatar avatar-sm rounded-circle",
                    attrs: {
                      href: "#",
                      "data-toggle": "tooltip",
                      "data-original-title": "Alexander Smith"
                    }
                  },
                  [
                    _c("img", {
                      attrs: {
                        alt: "Image placeholder",
                        src: "img/theme/team-3.jpg"
                      }
                    })
                  ]
                ),
                _vm._v(" "),
                _c(
                  "a",
                  {
                    staticClass: "avatar avatar-sm rounded-circle",
                    attrs: {
                      href: "#",
                      "data-toggle": "tooltip",
                      "data-original-title": "Jessica Doe"
                    }
                  },
                  [
                    _c("img", {
                      attrs: {
                        alt: "Image placeholder",
                        src: "img/theme/team-4.jpg"
                      }
                    })
                  ]
                )
              ])
            ]
          ),
          _vm._v(" "),
          _c("el-table-column", {
            attrs: {
              label: "Completion",
              prop: "completion",
              "min-width": "240px"
            },
            scopedSlots: _vm._u([
              {
                key: "default",
                fn: function(ref) {
                  var row = ref.row
                  return [
                    _c("div", { staticClass: "d-flex align-items-center" }, [
                      _c("span", { staticClass: "completion mr-2" }, [
                        _vm._v(_vm._s(row.completion) + "%")
                      ]),
                      _vm._v(" "),
                      _c(
                        "div",
                        [
                          _c("base-progress", {
                            attrs: {
                              type: row.statusType,
                              value: row.completion
                            }
                          })
                        ],
                        1
                      )
                    ])
                  ]
                }
              }
            ])
          })
        ],
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Tables/RegularTables/LightTable.vue?vue&type=template&id=84aa383e&":
/*!*****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/Tables/RegularTables/LightTable.vue?vue&type=template&id=84aa383e& ***!
  \*****************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "b-card",
    { attrs: { "no-body": "" } },
    [
      _c("b-card-header", { staticClass: "border-0" }, [
        _c("h3", { staticClass: "mb-0" }, [_vm._v("Light table")])
      ]),
      _vm._v(" "),
      _c(
        "el-table",
        {
          staticClass: "table-responsive table",
          attrs: { "header-row-class-name": "thead-light", data: _vm.projects }
        },
        [
          _c("el-table-column", {
            attrs: { label: "Project", "min-width": "310px", prop: "name" },
            scopedSlots: _vm._u([
              {
                key: "default",
                fn: function(ref) {
                  var row = ref.row
                  return [
                    _c(
                      "b-media",
                      {
                        staticClass: "align-items-center",
                        attrs: { "no-body": "" }
                      },
                      [
                        _c(
                          "a",
                          {
                            staticClass: "avatar rounded-circle mr-3",
                            attrs: { href: "#" }
                          },
                          [
                            _c("img", {
                              attrs: { alt: "Image placeholder", src: row.img }
                            })
                          ]
                        ),
                        _vm._v(" "),
                        _c("b-media-body", [
                          _c(
                            "span",
                            {
                              staticClass: "font-weight-600 name mb-0 text-sm"
                            },
                            [_vm._v(_vm._s(row.title))]
                          )
                        ])
                      ],
                      1
                    )
                  ]
                }
              }
            ])
          }),
          _vm._v(" "),
          _c("el-table-column", {
            attrs: { label: "Budget", prop: "budget", "min-width": "140px" }
          }),
          _vm._v(" "),
          _c("el-table-column", {
            attrs: { label: "Status", "min-width": "170px", prop: "status" },
            scopedSlots: _vm._u([
              {
                key: "default",
                fn: function(ref) {
                  var row = ref.row
                  return [
                    _c(
                      "badge",
                      { staticClass: "badge-dot mr-4", attrs: { type: "" } },
                      [
                        _c("i", { class: "bg-" + row.statusType }),
                        _vm._v(" "),
                        _c(
                          "span",
                          {
                            staticClass: "status",
                            class: "text-" + row.statusType
                          },
                          [_vm._v(_vm._s(row.status))]
                        )
                      ]
                    )
                  ]
                }
              }
            ])
          }),
          _vm._v(" "),
          _c(
            "el-table-column",
            { attrs: { label: "Users", "min-width": "190px" } },
            [
              _c("div", { staticClass: "avatar-group" }, [
                _c(
                  "a",
                  {
                    staticClass: "avatar avatar-sm rounded-circle",
                    attrs: {
                      href: "#",
                      "data-toggle": "tooltip",
                      "data-original-title": "Ryan Tompson"
                    }
                  },
                  [
                    _c("img", {
                      attrs: {
                        alt: "Image placeholder",
                        src: "img/theme/team-1.jpg"
                      }
                    })
                  ]
                ),
                _vm._v(" "),
                _c(
                  "a",
                  {
                    staticClass: "avatar avatar-sm rounded-circle",
                    attrs: {
                      href: "#",
                      "data-toggle": "tooltip",
                      "data-original-title": "Romina Hadid"
                    }
                  },
                  [
                    _c("img", {
                      attrs: {
                        alt: "Image placeholder",
                        src: "img/theme/team-2.jpg"
                      }
                    })
                  ]
                ),
                _vm._v(" "),
                _c(
                  "a",
                  {
                    staticClass: "avatar avatar-sm rounded-circle",
                    attrs: {
                      href: "#",
                      "data-toggle": "tooltip",
                      "data-original-title": "Alexander Smith"
                    }
                  },
                  [
                    _c("img", {
                      attrs: {
                        alt: "Image placeholder",
                        src: "img/theme/team-3.jpg"
                      }
                    })
                  ]
                ),
                _vm._v(" "),
                _c(
                  "a",
                  {
                    staticClass: "avatar avatar-sm rounded-circle",
                    attrs: {
                      href: "#",
                      "data-toggle": "tooltip",
                      "data-original-title": "Jessica Doe"
                    }
                  },
                  [
                    _c("img", {
                      attrs: {
                        alt: "Image placeholder",
                        src: "img/theme/team-4.jpg"
                      }
                    })
                  ]
                )
              ])
            ]
          ),
          _vm._v(" "),
          _c("el-table-column", {
            attrs: {
              label: "Completion",
              prop: "completion",
              "min-width": "240px"
            },
            scopedSlots: _vm._u([
              {
                key: "default",
                fn: function(ref) {
                  var row = ref.row
                  return [
                    _c("div", { staticClass: "d-flex align-items-center" }, [
                      _c("span", { staticClass: "completion mr-2" }, [
                        _vm._v(_vm._s(row.completion) + "%")
                      ]),
                      _vm._v(" "),
                      _c(
                        "div",
                        [
                          _c("base-progress", {
                            attrs: {
                              type: row.statusType,
                              value: row.completion
                            }
                          })
                        ],
                        1
                      )
                    ])
                  ]
                }
              }
            ])
          })
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "b-card-footer",
        { staticClass: "py-4 d-flex justify-content-end" },
        [
          _c("base-pagination", {
            attrs: { "per-page": 10, total: 50 },
            model: {
              value: _vm.currentPage,
              callback: function($$v) {
                _vm.currentPage = $$v
              },
              expression: "currentPage"
            }
          })
        ],
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/Charts/BarChart.js":
/*!****************************************************!*\
  !*** ./resources/js/components/Charts/BarChart.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue_chartjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-chartjs */ "./node_modules/vue-chartjs/es/index.js");
/* harmony import */ var _components_Charts_globalOptionsMixin__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/Charts/globalOptionsMixin */ "./resources/js/components/Charts/globalOptionsMixin.js");


/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'bar-chart',
  extends: vue_chartjs__WEBPACK_IMPORTED_MODULE_0__["Bar"],
  mixins: [vue_chartjs__WEBPACK_IMPORTED_MODULE_0__["mixins"].reactiveProp, _components_Charts_globalOptionsMixin__WEBPACK_IMPORTED_MODULE_1__["default"]],
  props: {
    extraOptions: {
      type: Object,
      default: function _default() {
        return {};
      }
    }
  },
  data: function data() {
    return {
      ctx: null
    };
  },
  mounted: function mounted() {
    var _this = this;

    this.$watch('chartData', function (newVal, oldVal) {
      if (!oldVal) {
        _this.renderChart(_this.chartData, _this.extraOptions);
      }
    }, {
      immediate: true
    });
  }
});

/***/ }),

/***/ "./resources/js/components/Charts/LineChart.js":
/*!*****************************************************!*\
  !*** ./resources/js/components/Charts/LineChart.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue_chartjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-chartjs */ "./node_modules/vue-chartjs/es/index.js");
/* harmony import */ var _components_Charts_globalOptionsMixin__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/Charts/globalOptionsMixin */ "./resources/js/components/Charts/globalOptionsMixin.js");


/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'line-chart',
  extends: vue_chartjs__WEBPACK_IMPORTED_MODULE_0__["Line"],
  mixins: [vue_chartjs__WEBPACK_IMPORTED_MODULE_0__["mixins"].reactiveProp, _components_Charts_globalOptionsMixin__WEBPACK_IMPORTED_MODULE_1__["default"]],
  props: {
    extraOptions: {
      type: Object,
      default: function _default() {
        return {};
      }
    }
  },
  data: function data() {
    return {
      ctx: null
    };
  },
  mounted: function mounted() {
    var _this = this;

    this.$watch('chartData', function (newVal, oldVal) {
      if (!oldVal) {
        _this.renderChart(_this.chartData, _this.extraOptions);
      }
    }, {
      immediate: true
    });
  }
});

/***/ }),

/***/ "./resources/js/components/Charts/config.js":
/*!**************************************************!*\
  !*** ./resources/js/components/Charts/config.js ***!
  \**************************************************/
/*! exports provided: Charts, initGlobalOptions, basicOptions, blueChartOptions, lineChartOptionsBlue */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Charts", function() { return Charts; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initGlobalOptions", function() { return initGlobalOptions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "basicOptions", function() { return basicOptions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "blueChartOptions", function() { return blueChartOptions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "lineChartOptionsBlue", function() { return lineChartOptionsBlue; });
/* harmony import */ var _components_Charts_optionHelpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/components/Charts/optionHelpers */ "./resources/js/components/Charts/optionHelpers.js");
/* harmony import */ var chart_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! chart.js */ "./node_modules/chart.js/dist/Chart.js");
/* harmony import */ var chart_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(chart_js__WEBPACK_IMPORTED_MODULE_1__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



var Charts = {
  mode: 'light',
  //(themeMode) ? themeMode : 'light';
  fonts: {
    base: 'Open Sans'
  },
  colors: {
    gray: {
      100: '#f6f9fc',
      200: '#e9ecef',
      300: '#dee2e6',
      400: '#ced4da',
      500: '#adb5bd',
      600: '#8898aa',
      700: '#525f7f',
      800: '#32325d',
      900: '#212529'
    },
    theme: {
      'default': '#172b4d',
      'primary': '#5e72e4',
      'secondary': '#f4f5f7',
      'info': '#11cdef',
      'success': '#2dce89',
      'danger': '#f5365c',
      'warning': '#fb6340'
    },
    black: '#12263F',
    white: '#FFFFFF',
    transparent: 'transparent'
  }
};

function chartOptions() {
  var colors = Charts.colors,
      mode = Charts.mode,
      fonts = Charts.fonts; // Options

  var options = {
    defaults: {
      global: {
        responsive: true,
        maintainAspectRatio: false,
        defaultColor: mode === 'dark' ? colors.gray[700] : colors.gray[600],
        defaultFontColor: mode === 'dark' ? colors.gray[700] : colors.gray[600],
        defaultFontFamily: fonts.base,
        defaultFontSize: 13,
        layout: {
          padding: 0
        },
        legend: {
          display: false,
          position: 'bottom',
          labels: {
            usePointStyle: true,
            padding: 16
          }
        },
        elements: {
          point: {
            radius: 0,
            backgroundColor: colors.theme['primary']
          },
          line: {
            tension: .4,
            borderWidth: 4,
            borderColor: colors.theme['primary'],
            backgroundColor: colors.transparent,
            borderCapStyle: 'rounded'
          },
          rectangle: {
            backgroundColor: colors.theme['warning']
          },
          arc: {
            backgroundColor: colors.theme['primary'],
            borderColor: mode == 'dark' ? colors.gray[800] : colors.white,
            borderWidth: 4
          }
        },
        tooltips: {
          enabled: true,
          mode: 'index',
          intersect: false
        }
      },
      pie: {
        tooltips: {
          mode: 'point'
        }
      },
      doughnut: {
        tooltips: {
          mode: 'point'
        },
        cutoutPercentage: 83,
        legendCallback: function legendCallback(chart) {
          var data = chart.data;
          var content = '';
          data.labels.forEach(function (label, index) {
            var bgColor = data.datasets[0].backgroundColor[index];
            content += '<span class="chart-legend-item">';
            content += '<i class="chart-legend-indicator" style="background-color: ' + bgColor + '"></i>';
            content += label;
            content += '</span>';
          });
          return content;
        }
      }
    }
  }; // yAxes

  chart_js__WEBPACK_IMPORTED_MODULE_1___default.a.scaleService.updateScaleDefaults('linear', {
    gridLines: {
      borderDash: [2],
      borderDashOffset: [2],
      color: mode === 'dark' ? colors.gray[900] : colors.gray[200],
      drawBorder: false,
      drawTicks: true,
      zeroLineWidth: 1,
      zeroLineColor: mode === 'dark' ? colors.gray[900] : colors.gray[200],
      zeroLineBorderDash: [2],
      zeroLineBorderDashOffset: [2]
    },
    ticks: {
      beginAtZero: true,
      padding: 10,
      callback: function callback(value) {
        if (!(value % 10)) {
          return value;
        }
      }
    }
  }); // xAxes

  chart_js__WEBPACK_IMPORTED_MODULE_1___default.a.scaleService.updateScaleDefaults('category', {
    gridLines: {
      drawBorder: false,
      drawOnChartArea: false,
      drawTicks: false,
      lineWidth: 1,
      zeroLineWidth: 1
    },
    ticks: {
      padding: 20
    },
    maxBarThickness: 10
  });
  return options;
}

;
var initialized = false;
function initGlobalOptions() {
  if (initialized) {
    return;
  }

  Object(_components_Charts_optionHelpers__WEBPACK_IMPORTED_MODULE_0__["parseOptions"])(chart_js__WEBPACK_IMPORTED_MODULE_1___default.a, chartOptions());
  initialized = true;
}
var basicOptions = {
  maintainAspectRatio: false,
  legend: {
    display: false
  },
  responsive: true
};
var blueChartOptions = {
  scales: {
    yAxes: [{
      gridLines: {
        color: Charts.colors.gray[700],
        zeroLineColor: Charts.colors.gray[700]
      }
    }]
  }
};
var lineChartOptionsBlue = _objectSpread(_objectSpread({}, basicOptions), {}, {
  tooltips: {
    backgroundColor: '#f5f5f5',
    titleFontColor: '#333',
    bodyFontColor: '#666',
    bodySpacing: 4,
    xPadding: 12,
    mode: 'nearest',
    intersect: 0,
    position: 'nearest'
  },
  responsive: true,
  scales: {
    yAxes: [{
      barPercentage: 1.6,
      gridLines: {
        drawBorder: false,
        color: 'rgba(29,140,248,0.0)',
        zeroLineColor: 'transparent'
      },
      ticks: {
        suggestedMin: 60,
        suggestedMax: 125,
        padding: 20,
        fontColor: '#9e9e9e'
      }
    }],
    xAxes: [{
      barPercentage: 1.6,
      gridLines: {
        drawBorder: false,
        color: 'rgba(29,140,248,0.1)',
        zeroLineColor: 'transparent'
      },
      ticks: {
        padding: 20,
        fontColor: '#9e9e9e'
      }
    }]
  }
});

/***/ }),

/***/ "./resources/js/components/Charts/globalOptionsMixin.js":
/*!**************************************************************!*\
  !*** ./resources/js/components/Charts/globalOptionsMixin.js ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_Charts_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/components/Charts/config */ "./resources/js/components/Charts/config.js");
/* harmony import */ var _roundedCornersExtension__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./roundedCornersExtension */ "./resources/js/components/Charts/roundedCornersExtension.js");


/* harmony default export */ __webpack_exports__["default"] = ({
  mounted: function mounted() {
    Object(_components_Charts_config__WEBPACK_IMPORTED_MODULE_0__["initGlobalOptions"])();
  }
});

/***/ }),

/***/ "./resources/js/components/Charts/optionHelpers.js":
/*!*********************************************************!*\
  !*** ./resources/js/components/Charts/optionHelpers.js ***!
  \*********************************************************/
/*! exports provided: parseOptions */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "parseOptions", function() { return parseOptions; });
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

// Parse global options
function parseOptions(parent, options) {
  for (var item in options) {
    if (_typeof(options[item]) !== 'object') {
      parent[item] = options[item];
    } else {
      parseOptions(parent[item], options[item]);
    }
  }
}

/***/ }),

/***/ "./resources/js/components/Charts/roundedCornersExtension.js":
/*!*******************************************************************!*\
  !*** ./resources/js/components/Charts/roundedCornersExtension.js ***!
  \*******************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var chart_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! chart.js */ "./node_modules/chart.js/dist/Chart.js");
/* harmony import */ var chart_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(chart_js__WEBPACK_IMPORTED_MODULE_0__);
//
// Chart extension for making the bars rounded
// Code from: https://codepen.io/jedtrow/full/ygRYgo
//


chart_js__WEBPACK_IMPORTED_MODULE_0___default.a.elements.Rectangle.prototype.draw = function () {
  var ctx = this._chart.ctx;
  var vm = this._view;
  var left, right, top, bottom, signX, signY, borderSkipped, radius;
  var borderWidth = vm.borderWidth; // Set Radius Here
  // If radius is large enough to cause drawing errors a max radius is imposed

  var cornerRadius = 6;

  if (!vm.horizontal) {
    // bar
    left = vm.x - vm.width / 2;
    right = vm.x + vm.width / 2;
    top = vm.y;
    bottom = vm.base;
    signX = 1;
    signY = bottom > top ? 1 : -1;
    borderSkipped = vm.borderSkipped || 'bottom';
  } else {
    // horizontal bar
    left = vm.base;
    right = vm.x;
    top = vm.y - vm.height / 2;
    bottom = vm.y + vm.height / 2;
    signX = right > left ? 1 : -1;
    signY = 1;
    borderSkipped = vm.borderSkipped || 'left';
  } // Canvas doesn't allow us to stroke inside the width so we can
  // adjust the sizes to fit if we're setting a stroke on the line


  if (borderWidth) {
    // borderWidth shold be less than bar width and bar height.
    var barSize = Math.min(Math.abs(left - right), Math.abs(top - bottom));
    borderWidth = borderWidth > barSize ? barSize : borderWidth;
    var halfStroke = borderWidth / 2; // Adjust borderWidth when bar top position is near vm.base(zero).

    var borderLeft = left + (borderSkipped !== 'left' ? halfStroke * signX : 0);
    var borderRight = right + (borderSkipped !== 'right' ? -halfStroke * signX : 0);
    var borderTop = top + (borderSkipped !== 'top' ? halfStroke * signY : 0);
    var borderBottom = bottom + (borderSkipped !== 'bottom' ? -halfStroke * signY : 0); // not become a vertical line?

    if (borderLeft !== borderRight) {
      top = borderTop;
      bottom = borderBottom;
    } // not become a horizontal line?


    if (borderTop !== borderBottom) {
      left = borderLeft;
      right = borderRight;
    }
  }

  ctx.beginPath();
  ctx.fillStyle = vm.backgroundColor;
  ctx.strokeStyle = vm.borderColor;
  ctx.lineWidth = borderWidth; // Corner points, from bottom-left to bottom-right clockwise
  // | 1 2 |
  // | 0 3 |

  var corners = [[left, bottom], [left, top], [right, top], [right, bottom]]; // Find first (starting) corner with fallback to 'bottom'

  var borders = ['bottom', 'left', 'top', 'right'];
  var startCorner = borders.indexOf(borderSkipped, 0);

  if (startCorner === -1) {
    startCorner = 0;
  }

  function cornerAt(index) {
    return corners[(startCorner + index) % 4];
  } // Draw rectangle from 'startCorner'


  var corner = cornerAt(0);
  ctx.moveTo(corner[0], corner[1]);

  for (var i = 1; i < 4; i++) {
    corner = cornerAt(i);
    var nextCornerId = i + 1;

    if (nextCornerId == 4) {
      nextCornerId = 0;
    }

    var nextCorner = cornerAt(nextCornerId);
    var width = corners[2][0] - corners[1][0];
    var height = corners[0][1] - corners[1][1];
    var x = corners[1][0];
    var y = corners[1][1];
    var _radius = cornerRadius; // Fix radius being too large

    if (_radius > height / 2) {
      _radius = height / 2;
    }

    if (_radius > width / 2) {
      _radius = width / 2;
    }

    ctx.moveTo(x + _radius, y);
    ctx.lineTo(x + width - _radius, y);
    ctx.quadraticCurveTo(x + width, y, x + width, y + _radius);
    ctx.lineTo(x + width, y + height - _radius);
    ctx.quadraticCurveTo(x + width, y + height, x + width - _radius, y + height);
    ctx.lineTo(x + _radius, y + height);
    ctx.quadraticCurveTo(x, y + height, x, y + height - _radius);
    ctx.lineTo(x, y + _radius);
    ctx.quadraticCurveTo(x, y, x + _radius, y);
  }

  ctx.fill();

  if (borderWidth) {
    ctx.stroke();
  }
};

/***/ }),

/***/ "./resources/js/views/Dashboard.vue":
/*!******************************************!*\
  !*** ./resources/js/views/Dashboard.vue ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Dashboard_vue_vue_type_template_id_1f79daf6___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Dashboard.vue?vue&type=template&id=1f79daf6& */ "./resources/js/views/Dashboard.vue?vue&type=template&id=1f79daf6&");
/* harmony import */ var _Dashboard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Dashboard.vue?vue&type=script&lang=js& */ "./resources/js/views/Dashboard.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _Dashboard_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Dashboard.vue?vue&type=style&index=0&lang=css& */ "./resources/js/views/Dashboard.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _Dashboard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Dashboard_vue_vue_type_template_id_1f79daf6___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Dashboard_vue_vue_type_template_id_1f79daf6___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/Dashboard.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/Dashboard.vue?vue&type=script&lang=js&":
/*!*******************************************************************!*\
  !*** ./resources/js/views/Dashboard.vue?vue&type=script&lang=js& ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Dashboard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./Dashboard.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Dashboard.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Dashboard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/Dashboard.vue?vue&type=style&index=0&lang=css&":
/*!***************************************************************************!*\
  !*** ./resources/js/views/Dashboard.vue?vue&type=style&index=0&lang=css& ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Dashboard_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/style-loader!../../../node_modules/css-loader??ref--6-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--6-2!../../../node_modules/vue-loader/lib??vue-loader-options!./Dashboard.vue?vue&type=style&index=0&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Dashboard.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Dashboard_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Dashboard_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Dashboard_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Dashboard_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/views/Dashboard.vue?vue&type=template&id=1f79daf6&":
/*!*************************************************************************!*\
  !*** ./resources/js/views/Dashboard.vue?vue&type=template&id=1f79daf6& ***!
  \*************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Dashboard_vue_vue_type_template_id_1f79daf6___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./Dashboard.vue?vue&type=template&id=1f79daf6& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Dashboard.vue?vue&type=template&id=1f79daf6&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Dashboard_vue_vue_type_template_id_1f79daf6___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Dashboard_vue_vue_type_template_id_1f79daf6___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/views/Dashboard/PageVisitsTable.vue":
/*!**********************************************************!*\
  !*** ./resources/js/views/Dashboard/PageVisitsTable.vue ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _PageVisitsTable_vue_vue_type_template_id_425e7b26___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./PageVisitsTable.vue?vue&type=template&id=425e7b26& */ "./resources/js/views/Dashboard/PageVisitsTable.vue?vue&type=template&id=425e7b26&");
/* harmony import */ var _PageVisitsTable_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./PageVisitsTable.vue?vue&type=script&lang=js& */ "./resources/js/views/Dashboard/PageVisitsTable.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _PageVisitsTable_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _PageVisitsTable_vue_vue_type_template_id_425e7b26___WEBPACK_IMPORTED_MODULE_0__["render"],
  _PageVisitsTable_vue_vue_type_template_id_425e7b26___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/Dashboard/PageVisitsTable.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/Dashboard/PageVisitsTable.vue?vue&type=script&lang=js&":
/*!***********************************************************************************!*\
  !*** ./resources/js/views/Dashboard/PageVisitsTable.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PageVisitsTable_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./PageVisitsTable.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Dashboard/PageVisitsTable.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PageVisitsTable_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/Dashboard/PageVisitsTable.vue?vue&type=template&id=425e7b26&":
/*!*****************************************************************************************!*\
  !*** ./resources/js/views/Dashboard/PageVisitsTable.vue?vue&type=template&id=425e7b26& ***!
  \*****************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PageVisitsTable_vue_vue_type_template_id_425e7b26___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./PageVisitsTable.vue?vue&type=template&id=425e7b26& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Dashboard/PageVisitsTable.vue?vue&type=template&id=425e7b26&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PageVisitsTable_vue_vue_type_template_id_425e7b26___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PageVisitsTable_vue_vue_type_template_id_425e7b26___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/views/Dashboard/SocialTrafficTable.vue":
/*!*************************************************************!*\
  !*** ./resources/js/views/Dashboard/SocialTrafficTable.vue ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _SocialTrafficTable_vue_vue_type_template_id_66e6ad10___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SocialTrafficTable.vue?vue&type=template&id=66e6ad10& */ "./resources/js/views/Dashboard/SocialTrafficTable.vue?vue&type=template&id=66e6ad10&");
/* harmony import */ var _SocialTrafficTable_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SocialTrafficTable.vue?vue&type=script&lang=js& */ "./resources/js/views/Dashboard/SocialTrafficTable.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _SocialTrafficTable_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _SocialTrafficTable_vue_vue_type_template_id_66e6ad10___WEBPACK_IMPORTED_MODULE_0__["render"],
  _SocialTrafficTable_vue_vue_type_template_id_66e6ad10___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/Dashboard/SocialTrafficTable.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/Dashboard/SocialTrafficTable.vue?vue&type=script&lang=js&":
/*!**************************************************************************************!*\
  !*** ./resources/js/views/Dashboard/SocialTrafficTable.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SocialTrafficTable_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./SocialTrafficTable.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Dashboard/SocialTrafficTable.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SocialTrafficTable_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/Dashboard/SocialTrafficTable.vue?vue&type=template&id=66e6ad10&":
/*!********************************************************************************************!*\
  !*** ./resources/js/views/Dashboard/SocialTrafficTable.vue?vue&type=template&id=66e6ad10& ***!
  \********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SocialTrafficTable_vue_vue_type_template_id_66e6ad10___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./SocialTrafficTable.vue?vue&type=template&id=66e6ad10& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Dashboard/SocialTrafficTable.vue?vue&type=template&id=66e6ad10&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SocialTrafficTable_vue_vue_type_template_id_66e6ad10___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SocialTrafficTable_vue_vue_type_template_id_66e6ad10___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/views/GoogleMaps.vue":
/*!*******************************************!*\
  !*** ./resources/js/views/GoogleMaps.vue ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _GoogleMaps_vue_vue_type_template_id_4cae1acf___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./GoogleMaps.vue?vue&type=template&id=4cae1acf& */ "./resources/js/views/GoogleMaps.vue?vue&type=template&id=4cae1acf&");
/* harmony import */ var _GoogleMaps_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./GoogleMaps.vue?vue&type=script&lang=js& */ "./resources/js/views/GoogleMaps.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _GoogleMaps_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _GoogleMaps_vue_vue_type_template_id_4cae1acf___WEBPACK_IMPORTED_MODULE_0__["render"],
  _GoogleMaps_vue_vue_type_template_id_4cae1acf___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/GoogleMaps.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/GoogleMaps.vue?vue&type=script&lang=js&":
/*!********************************************************************!*\
  !*** ./resources/js/views/GoogleMaps.vue?vue&type=script&lang=js& ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_GoogleMaps_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./GoogleMaps.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/GoogleMaps.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_GoogleMaps_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/GoogleMaps.vue?vue&type=template&id=4cae1acf&":
/*!**************************************************************************!*\
  !*** ./resources/js/views/GoogleMaps.vue?vue&type=template&id=4cae1acf& ***!
  \**************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_GoogleMaps_vue_vue_type_template_id_4cae1acf___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./GoogleMaps.vue?vue&type=template&id=4cae1acf& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/GoogleMaps.vue?vue&type=template&id=4cae1acf&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_GoogleMaps_vue_vue_type_template_id_4cae1acf___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_GoogleMaps_vue_vue_type_template_id_4cae1acf___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/views/Icons.vue":
/*!**************************************!*\
  !*** ./resources/js/views/Icons.vue ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Icons_vue_vue_type_template_id_279a5c8b___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Icons.vue?vue&type=template&id=279a5c8b& */ "./resources/js/views/Icons.vue?vue&type=template&id=279a5c8b&");
/* harmony import */ var _Icons_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Icons.vue?vue&type=script&lang=js& */ "./resources/js/views/Icons.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Icons_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Icons_vue_vue_type_template_id_279a5c8b___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Icons_vue_vue_type_template_id_279a5c8b___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/Icons.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/Icons.vue?vue&type=script&lang=js&":
/*!***************************************************************!*\
  !*** ./resources/js/views/Icons.vue?vue&type=script&lang=js& ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Icons_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./Icons.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Icons.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Icons_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/Icons.vue?vue&type=template&id=279a5c8b&":
/*!*********************************************************************!*\
  !*** ./resources/js/views/Icons.vue?vue&type=template&id=279a5c8b& ***!
  \*********************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Icons_vue_vue_type_template_id_279a5c8b___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./Icons.vue?vue&type=template&id=279a5c8b& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Icons.vue?vue&type=template&id=279a5c8b&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Icons_vue_vue_type_template_id_279a5c8b___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Icons_vue_vue_type_template_id_279a5c8b___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/views/Maps/API_KEY.js":
/*!********************************************!*\
  !*** ./resources/js/views/Maps/API_KEY.js ***!
  \********************************************/
/*! exports provided: API_KEY */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "API_KEY", function() { return API_KEY; });
var API_KEY = 'YOUR_API_KEY';

/***/ }),

/***/ "./resources/js/views/Pages/Login.vue":
/*!********************************************!*\
  !*** ./resources/js/views/Pages/Login.vue ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Login_vue_vue_type_template_id_4f3b21ef___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Login.vue?vue&type=template&id=4f3b21ef& */ "./resources/js/views/Pages/Login.vue?vue&type=template&id=4f3b21ef&");
/* harmony import */ var _Login_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Login.vue?vue&type=script&lang=js& */ "./resources/js/views/Pages/Login.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Login_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Login_vue_vue_type_template_id_4f3b21ef___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Login_vue_vue_type_template_id_4f3b21ef___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/Pages/Login.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/Pages/Login.vue?vue&type=script&lang=js&":
/*!*********************************************************************!*\
  !*** ./resources/js/views/Pages/Login.vue?vue&type=script&lang=js& ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Login_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Login.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Pages/Login.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Login_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/Pages/Login.vue?vue&type=template&id=4f3b21ef&":
/*!***************************************************************************!*\
  !*** ./resources/js/views/Pages/Login.vue?vue&type=template&id=4f3b21ef& ***!
  \***************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Login_vue_vue_type_template_id_4f3b21ef___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Login.vue?vue&type=template&id=4f3b21ef& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Pages/Login.vue?vue&type=template&id=4f3b21ef&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Login_vue_vue_type_template_id_4f3b21ef___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Login_vue_vue_type_template_id_4f3b21ef___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/views/Pages/Register.vue":
/*!***********************************************!*\
  !*** ./resources/js/views/Pages/Register.vue ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Register_vue_vue_type_template_id_1eba06e6___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Register.vue?vue&type=template&id=1eba06e6& */ "./resources/js/views/Pages/Register.vue?vue&type=template&id=1eba06e6&");
/* harmony import */ var _Register_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Register.vue?vue&type=script&lang=js& */ "./resources/js/views/Pages/Register.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Register_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Register_vue_vue_type_template_id_1eba06e6___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Register_vue_vue_type_template_id_1eba06e6___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/Pages/Register.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/Pages/Register.vue?vue&type=script&lang=js&":
/*!************************************************************************!*\
  !*** ./resources/js/views/Pages/Register.vue?vue&type=script&lang=js& ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Register_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Register.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Pages/Register.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Register_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/Pages/Register.vue?vue&type=template&id=1eba06e6&":
/*!******************************************************************************!*\
  !*** ./resources/js/views/Pages/Register.vue?vue&type=template&id=1eba06e6& ***!
  \******************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Register_vue_vue_type_template_id_1eba06e6___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Register.vue?vue&type=template&id=1eba06e6& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Pages/Register.vue?vue&type=template&id=1eba06e6&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Register_vue_vue_type_template_id_1eba06e6___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Register_vue_vue_type_template_id_1eba06e6___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/views/Pages/UserProfile.vue":
/*!**************************************************!*\
  !*** ./resources/js/views/Pages/UserProfile.vue ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _UserProfile_vue_vue_type_template_id_83b5de38___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./UserProfile.vue?vue&type=template&id=83b5de38& */ "./resources/js/views/Pages/UserProfile.vue?vue&type=template&id=83b5de38&");
/* harmony import */ var _UserProfile_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./UserProfile.vue?vue&type=script&lang=js& */ "./resources/js/views/Pages/UserProfile.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _UserProfile_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _UserProfile_vue_vue_type_template_id_83b5de38___WEBPACK_IMPORTED_MODULE_0__["render"],
  _UserProfile_vue_vue_type_template_id_83b5de38___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/Pages/UserProfile.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/Pages/UserProfile.vue?vue&type=script&lang=js&":
/*!***************************************************************************!*\
  !*** ./resources/js/views/Pages/UserProfile.vue?vue&type=script&lang=js& ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_UserProfile_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./UserProfile.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Pages/UserProfile.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_UserProfile_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/Pages/UserProfile.vue?vue&type=template&id=83b5de38&":
/*!*********************************************************************************!*\
  !*** ./resources/js/views/Pages/UserProfile.vue?vue&type=template&id=83b5de38& ***!
  \*********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_UserProfile_vue_vue_type_template_id_83b5de38___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./UserProfile.vue?vue&type=template&id=83b5de38& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Pages/UserProfile.vue?vue&type=template&id=83b5de38&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_UserProfile_vue_vue_type_template_id_83b5de38___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_UserProfile_vue_vue_type_template_id_83b5de38___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/views/Pages/UserProfile/EditProfileForm.vue":
/*!******************************************************************!*\
  !*** ./resources/js/views/Pages/UserProfile/EditProfileForm.vue ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _EditProfileForm_vue_vue_type_template_id_231e9058___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./EditProfileForm.vue?vue&type=template&id=231e9058& */ "./resources/js/views/Pages/UserProfile/EditProfileForm.vue?vue&type=template&id=231e9058&");
/* harmony import */ var _EditProfileForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./EditProfileForm.vue?vue&type=script&lang=js& */ "./resources/js/views/Pages/UserProfile/EditProfileForm.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _EditProfileForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _EditProfileForm_vue_vue_type_template_id_231e9058___WEBPACK_IMPORTED_MODULE_0__["render"],
  _EditProfileForm_vue_vue_type_template_id_231e9058___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/Pages/UserProfile/EditProfileForm.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/Pages/UserProfile/EditProfileForm.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************!*\
  !*** ./resources/js/views/Pages/UserProfile/EditProfileForm.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_EditProfileForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./EditProfileForm.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Pages/UserProfile/EditProfileForm.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_EditProfileForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/Pages/UserProfile/EditProfileForm.vue?vue&type=template&id=231e9058&":
/*!*************************************************************************************************!*\
  !*** ./resources/js/views/Pages/UserProfile/EditProfileForm.vue?vue&type=template&id=231e9058& ***!
  \*************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_EditProfileForm_vue_vue_type_template_id_231e9058___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./EditProfileForm.vue?vue&type=template&id=231e9058& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Pages/UserProfile/EditProfileForm.vue?vue&type=template&id=231e9058&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_EditProfileForm_vue_vue_type_template_id_231e9058___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_EditProfileForm_vue_vue_type_template_id_231e9058___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/views/Pages/UserProfile/UserCard.vue":
/*!***********************************************************!*\
  !*** ./resources/js/views/Pages/UserProfile/UserCard.vue ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _UserCard_vue_vue_type_template_id_548df796___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./UserCard.vue?vue&type=template&id=548df796& */ "./resources/js/views/Pages/UserProfile/UserCard.vue?vue&type=template&id=548df796&");
/* harmony import */ var _UserCard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./UserCard.vue?vue&type=script&lang=js& */ "./resources/js/views/Pages/UserProfile/UserCard.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _UserCard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _UserCard_vue_vue_type_template_id_548df796___WEBPACK_IMPORTED_MODULE_0__["render"],
  _UserCard_vue_vue_type_template_id_548df796___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/Pages/UserProfile/UserCard.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/Pages/UserProfile/UserCard.vue?vue&type=script&lang=js&":
/*!************************************************************************************!*\
  !*** ./resources/js/views/Pages/UserProfile/UserCard.vue?vue&type=script&lang=js& ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_UserCard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./UserCard.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Pages/UserProfile/UserCard.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_UserCard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/Pages/UserProfile/UserCard.vue?vue&type=template&id=548df796&":
/*!******************************************************************************************!*\
  !*** ./resources/js/views/Pages/UserProfile/UserCard.vue?vue&type=template&id=548df796& ***!
  \******************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_UserCard_vue_vue_type_template_id_548df796___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./UserCard.vue?vue&type=template&id=548df796& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Pages/UserProfile/UserCard.vue?vue&type=template&id=548df796&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_UserCard_vue_vue_type_template_id_548df796___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_UserCard_vue_vue_type_template_id_548df796___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/views/RegularTables.vue":
/*!**********************************************!*\
  !*** ./resources/js/views/RegularTables.vue ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _RegularTables_vue_vue_type_template_id_b2782bdc___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./RegularTables.vue?vue&type=template&id=b2782bdc& */ "./resources/js/views/RegularTables.vue?vue&type=template&id=b2782bdc&");
/* harmony import */ var _RegularTables_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./RegularTables.vue?vue&type=script&lang=js& */ "./resources/js/views/RegularTables.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _RegularTables_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./RegularTables.vue?vue&type=style&index=0&lang=css& */ "./resources/js/views/RegularTables.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _RegularTables_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _RegularTables_vue_vue_type_template_id_b2782bdc___WEBPACK_IMPORTED_MODULE_0__["render"],
  _RegularTables_vue_vue_type_template_id_b2782bdc___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/RegularTables.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/RegularTables.vue?vue&type=script&lang=js&":
/*!***********************************************************************!*\
  !*** ./resources/js/views/RegularTables.vue?vue&type=script&lang=js& ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_RegularTables_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./RegularTables.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/RegularTables.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_RegularTables_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/RegularTables.vue?vue&type=style&index=0&lang=css&":
/*!*******************************************************************************!*\
  !*** ./resources/js/views/RegularTables.vue?vue&type=style&index=0&lang=css& ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_RegularTables_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/style-loader!../../../node_modules/css-loader??ref--6-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--6-2!../../../node_modules/vue-loader/lib??vue-loader-options!./RegularTables.vue?vue&type=style&index=0&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/RegularTables.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_RegularTables_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_RegularTables_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_RegularTables_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_RegularTables_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/views/RegularTables.vue?vue&type=template&id=b2782bdc&":
/*!*****************************************************************************!*\
  !*** ./resources/js/views/RegularTables.vue?vue&type=template&id=b2782bdc& ***!
  \*****************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_RegularTables_vue_vue_type_template_id_b2782bdc___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./RegularTables.vue?vue&type=template&id=b2782bdc& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/RegularTables.vue?vue&type=template&id=b2782bdc&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_RegularTables_vue_vue_type_template_id_b2782bdc___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_RegularTables_vue_vue_type_template_id_b2782bdc___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/views/Tables/RegularTables/DarkTable.vue":
/*!***************************************************************!*\
  !*** ./resources/js/views/Tables/RegularTables/DarkTable.vue ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _DarkTable_vue_vue_type_template_id_57563d02___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DarkTable.vue?vue&type=template&id=57563d02& */ "./resources/js/views/Tables/RegularTables/DarkTable.vue?vue&type=template&id=57563d02&");
/* harmony import */ var _DarkTable_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DarkTable.vue?vue&type=script&lang=js& */ "./resources/js/views/Tables/RegularTables/DarkTable.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _DarkTable_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _DarkTable_vue_vue_type_template_id_57563d02___WEBPACK_IMPORTED_MODULE_0__["render"],
  _DarkTable_vue_vue_type_template_id_57563d02___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/Tables/RegularTables/DarkTable.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/Tables/RegularTables/DarkTable.vue?vue&type=script&lang=js&":
/*!****************************************************************************************!*\
  !*** ./resources/js/views/Tables/RegularTables/DarkTable.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DarkTable_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./DarkTable.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Tables/RegularTables/DarkTable.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DarkTable_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/Tables/RegularTables/DarkTable.vue?vue&type=template&id=57563d02&":
/*!**********************************************************************************************!*\
  !*** ./resources/js/views/Tables/RegularTables/DarkTable.vue?vue&type=template&id=57563d02& ***!
  \**********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DarkTable_vue_vue_type_template_id_57563d02___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./DarkTable.vue?vue&type=template&id=57563d02& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Tables/RegularTables/DarkTable.vue?vue&type=template&id=57563d02&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DarkTable_vue_vue_type_template_id_57563d02___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DarkTable_vue_vue_type_template_id_57563d02___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/views/Tables/RegularTables/LightTable.vue":
/*!****************************************************************!*\
  !*** ./resources/js/views/Tables/RegularTables/LightTable.vue ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _LightTable_vue_vue_type_template_id_84aa383e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./LightTable.vue?vue&type=template&id=84aa383e& */ "./resources/js/views/Tables/RegularTables/LightTable.vue?vue&type=template&id=84aa383e&");
/* harmony import */ var _LightTable_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./LightTable.vue?vue&type=script&lang=js& */ "./resources/js/views/Tables/RegularTables/LightTable.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _LightTable_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _LightTable_vue_vue_type_template_id_84aa383e___WEBPACK_IMPORTED_MODULE_0__["render"],
  _LightTable_vue_vue_type_template_id_84aa383e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/Tables/RegularTables/LightTable.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/Tables/RegularTables/LightTable.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************!*\
  !*** ./resources/js/views/Tables/RegularTables/LightTable.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_LightTable_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./LightTable.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Tables/RegularTables/LightTable.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_LightTable_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/Tables/RegularTables/LightTable.vue?vue&type=template&id=84aa383e&":
/*!***********************************************************************************************!*\
  !*** ./resources/js/views/Tables/RegularTables/LightTable.vue?vue&type=template&id=84aa383e& ***!
  \***********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_LightTable_vue_vue_type_template_id_84aa383e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./LightTable.vue?vue&type=template&id=84aa383e& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Tables/RegularTables/LightTable.vue?vue&type=template&id=84aa383e&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_LightTable_vue_vue_type_template_id_84aa383e___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_LightTable_vue_vue_type_template_id_84aa383e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/views/Tables/projects.js":
/*!***********************************************!*\
  !*** ./resources/js/views/Tables/projects.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ([{
  img: 'img/theme/bootstrap.jpg',
  title: 'Argon Design System',
  budget: '$2500 USD',
  status: 'pending',
  statusType: 'warning',
  completion: 60
}, {
  img: 'img/theme/angular.jpg',
  title: 'Angular Now UI Kit PRO',
  budget: '$1800 USD',
  status: 'completed',
  statusType: 'success',
  completion: 100
}, {
  img: 'img/theme/sketch.jpg',
  title: 'Black Dashboard',
  budget: '$3150 USD',
  status: 'delayed',
  statusType: 'danger',
  completion: 72
}, {
  img: 'img/theme/react.jpg',
  title: 'React Material Dashboard',
  budget: '$4400 USD',
  status: 'on schedule',
  statusType: 'info',
  completion: 90
}, {
  img: 'img/theme/vue.jpg',
  title: 'Vue Paper UI Kit PRO',
  budget: '$2200 USD',
  status: 'completed',
  statusType: 'success',
  completion: 100
}, {
  img: 'img/theme/bootstrap.jpg',
  title: 'Argon Design System',
  budget: '$2500 USD',
  status: 'pending',
  statusType: 'warning',
  completion: 60
}, {
  img: 'img/theme/angular.jpg',
  title: 'Angular Now UI Kit PRO',
  budget: '$1800 USD',
  status: 'completed',
  statusType: 'success',
  completion: 100
}, {
  img: 'img/theme/sketch.jpg',
  title: 'Black Dashboard',
  budget: '$3150 USD',
  status: 'delayed',
  statusType: 'danger',
  completion: 72
}, {
  img: 'img/theme/vue.jpg',
  title: 'Vue Paper UI Kit PRO',
  budget: '$2200 USD',
  status: 'completed',
  statusType: 'success',
  completion: 100
}]);

/***/ }),

/***/ "./resources/js/views/Tables/users.js":
/*!********************************************!*\
  !*** ./resources/js/views/Tables/users.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ([{
  id: 1,
  name: 'John Michael',
  image: 'img/theme/team-1.jpg',
  createdAt: '10/09/2018',
  product: 'Argon Dashboard PRO',
  active: true
}, {
  id: 2,
  name: 'Alexandra Smith',
  image: 'img/theme/team-2.jpg',
  createdAt: '08/09/2018',
  product: 'Argon Design System',
  active: false
}, {
  id: 3,
  name: 'Samantha Ivy',
  image: 'img/theme/team-3.jpg',
  createdAt: '30/08/2018',
  product: 'Black Dashboard',
  active: false
}, {
  id: 4,
  name: 'John Michael',
  image: 'img/theme/team-1.jpg',
  createdAt: '10/09/2018',
  product: 'Argon Dashboard PRO',
  active: true
}, {
  id: 5,
  name: 'Alexandra Smith',
  image: 'img/theme/team-2.jpg',
  createdAt: '30/09/2018',
  product: 'Vue Argon Dashboard',
  active: true
}]);

/***/ })

}]);
;(function(window) {

  var svgSprite = '<svg>' +
    '' +
    '<symbol id="icon-qq" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M623.647823 828.89951c-40.281425 0-77.615729-10.404977-101.604072-28.073382-7.888667 0.418532-14.849196 0.418532-22.642696-0.016373-23.989367 17.684778-61.322647 28.088732-101.620445 28.088732-75.968206 0-131.098827-33.82948-131.098827-80.447217 0-22.676465 13.389962-42.998303 37.380352-57.565067-0.361227-0.546446-0.720408-1.091868-1.081635-1.655709-14.049994 10.216689-29.667693 13.134135-43.967374 8.328689-42.790572-14.456247-45.125757-88.75851-25.604144-151.34494 10.44284-33.45495 29.730115-59.671031 45.815465-77.077469-0.170892-2.24411-0.249687-4.459568-0.249687-6.642281 0-18.140149 4.733814-35.779901 14.065344-52.514027 0-0.24764 0-0.5137 0-0.779759 0-120.696919 97.716532-218.909755 217.838354-218.909755 120.108518 0 217.826074 98.212836 217.826074 218.909755 0 0.078795 0 0.156566 0 0.233314 9.532097 16.890692 14.361079 34.703383 14.361079 53.060473 0 2.400676-0.094144 4.786003-0.282433 7.189749 15.884782 17.311271 34.952047 43.324738 45.316092 76.513628 19.536962 62.587454 17.201777 136.905066-25.620517 151.377686-14.31503 4.819772-29.823236 1.888-43.840484-8.251941-0.361227 0.562818-0.720408 1.108241-1.098008 1.669012 23.896246 14.567787 37.22481 34.841529 37.22481 57.45762C754.763023 795.070031 699.616028 828.89951 623.647823 828.89951zM527.20019 768.524444c3.842515 0 7.573489 1.372254 10.491958 3.88447 17.623379 15.142885 50.566676 24.547069 85.955674 24.547069 54.598502 0 99.002828-21.756513 99.002828-48.504714 0-14.193257-12.841469-27.652803-35.247782-36.947494-4.626367-1.917676-8.090259-5.879917-9.361205-10.69969-1.269923-4.835122-0.187265-9.965979 2.90005-13.896498 7.541767-9.544377 14.239306-19.791765 19.929912-30.426987 2.509147-4.695952 7.196912-7.845689 12.496615-8.392134 5.439896-0.591471 10.584056 1.557472 13.986549 5.628184 6.271844 7.440459 16.337083 16.45681 24.836665 13.601786 16.401552-5.550413 22.421662-56.598043 5.235235-111.638613-9.655917-30.957059-28.708855-54.787814-42.976814-69.309552-3.576455-3.64911-5.205559-8.749268-4.359284-13.771655 0.580215-3.524267 0.861624-6.828522 0.861624-10.104125 0-13.913894-4.075829-27.575032-12.136412-40.614-1.739621-2.806929-2.570545-6.096858-2.352581-9.404184 0.078795-1.091868 0.12689-2.168386 0.12689-3.275603 0-103.090936-83.306334-186.968276-185.712679-186.968276-102.404298 0-185.725982 83.877339-185.725982 186.968276 0 1.233084 0.062422 2.465145 0.156566 3.665483 0.218988 3.290953-0.580215 6.580882-2.303462 9.404184-7.904017 12.930497-11.918447 26.467815-11.918447 40.22412 0 3.134387 0.268106 6.361895 0.802272 9.731642 0.799202 5.004991-0.831948 10.073426-4.39203 13.676487-14.442944 14.630209-33.697473 38.617529-43.416835 69.777203-17.169031 55.05592-11.166317 106.0882 5.253654 111.623263 8.655124 2.994194 18.626219-6.207375 24.928762-13.709233 3.434216-4.069689 8.609075-6.191003 14.002922-5.630231 5.316076 0.546446 10.020214 3.711532 12.512988 8.40646 5.646604 10.589173 12.340049 20.852934 19.912515 30.475082 3.090385 3.930519 4.15667 9.076726 2.869351 13.897521-1.269923 4.835122-4.733814 8.779967-9.374508 10.698666-22.485107 9.279341-35.391045 22.77061-35.391045 37.009915 0 26.747177 44.406372 48.504714 98.987478 48.504714 35.404348 0 68.347644-9.404184 85.98842-24.563442 3.214205-2.775206 7.305383-4.228301 11.727089-3.838422 10.771321 0.827855 19.428491 0.843204 30.513968 0.01535C526.400988 768.539794 526.807241 768.524444 527.20019 768.524444z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-dianhua" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M194.615909 0c-5.892206 0-11.796803 0.54523-17.544957 1.612457-90.232533 16.785971-159.315703 145.619887-169.51399 207.097712-18.175379 109.575821 14.45635 184.672014 52.427311 249.51261 65.147288 111.231648 145.540891 212.923313 238.947222 302.260553 115.074593 110.06374 161.803317 147.469333 294.994429 220.277728 39.691844 22.160828 128.877287 43.238939 168.725574 43.238939l0.732653 0 2.53718-0.043371c60.661529-1.620202 107.827056-15.574692 148.449819-43.926673 10.759007-7.933722 94.532418-71.296619 105.390558-126.855907 13.618368-69.664026-50.168941-119.230426-88.282405-148.852546-5.297409-4.120207-10.13478-7.846981-14.039683-11.166381-43.375247-36.823188-100.653869-79.101778-159.080263-79.101778-36.078143 0.007745-67.836265 16.181881-89.746163 45.638263l-2.529435 2.953848c-18.347313 21.451409-19.845147 23.206369-37.109744 23.471239-0.021685 0-0.043371 0-0.043371 0-27.442747 0-94.805033-8.285334-167.779166-84.541691C417.969852 556.45409 376.272118 499.124353 354.929136 455.512117c-24.668578-50.700231-24.668578-50.700231 1.369272-89.142072l1.118342-1.657376c1.483894-2.142198 3.547095-4.377333 5.712528-6.908317 20.447689-23.901847 74.752327-87.402601 13.873945-191.172958C328.660493 84.241195 269.188558 0 194.615909 0L194.615909 0 194.615909 0z"  ></path>' +
    '' +
    '<path d="M547.150733 301.541841c-4.981423-4.981423-8.068481-11.857212-8.042148-19.459459 0-15.206042 12.326544-27.529488 27.527939-27.529488l325.044059-0.026332c15.204493 0 27.529488 12.324995 27.529488 27.529488 0 15.204493-12.324995 27.531037-27.529488 27.531037l-325.04251 0.024783C559.009494 309.61187 552.133705 306.526362 547.150733 301.541841L547.150733 301.541841 547.150733 301.541841z"  ></path>' +
    '' +
    '<path d="M778.549922 431.176564c-10.743517-10.743517-10.741968-28.180047 0-38.920467l111.0814-111.082949-131.034974-119.095667c-11.41731-9.91328-12.038439-27.661149-1.764254-38.869351 10.274185-11.209751 27.684383-12.013656 38.869351-1.765803l130.929645 119.617663c11.287199 9.47028 17.487645 24.078428 17.929096 38.997914 0.415119 14.893154-5.422874 29.502851-15.957283 40.035711l-111.0814 111.0814C806.72842 441.918532 789.290341 441.920081 778.549922 431.176564L778.549922 431.176564 778.549922 431.176564z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-xiaoxi" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M885.68832 217.97888h-680.448v465.65888c0 50.07872 40.73984 90.8032 90.8032 90.8032h64.93696v173.2608l150.49216-173.2608h374.21568c50.06848 0 90.78784-40.72448 90.78784-90.8032V308.77696c0.00512-50.06848-40.71424-90.79808-90.78784-90.79808z m62.37184 465.65376c0 34.39616-27.99104 62.38208-62.37184 62.38208H498.5088L389.40672 871.6288v-125.61408H296.04352c-34.39616 0-62.37696-27.98592-62.37696-62.38208V246.40512h652.02176c34.3808 0 62.36672 27.9808 62.36672 62.37184l0.00512 374.85568z" fill="" ></path>' +
    '' +
    '<path d="M392.4224 450.58048c-24.55552 0-44.48768 19.93216-44.48768 44.50304 0 24.576 19.93216 44.49792 44.48768 44.49792 24.58112 0 44.51328-19.92192 44.51328-44.49792 0-24.57088-19.93216-44.50304-44.51328-44.50304zM590.85312 450.58048a44.51328 44.51328 0 0 0-44.51328 44.50304c0 24.576 19.93216 44.49792 44.51328 44.49792 24.57088 0 44.51328-19.92192 44.51328-44.49792 0.00512-24.57088-19.9424-44.50304-44.51328-44.50304zM789.27872 450.58048c-24.56064 0-44.49792 19.93216-44.49792 44.50304a44.50304 44.50304 0 1 0 44.49792-44.50304z" fill="" ></path>' +
    '' +
    '<path d="M81.5104 592.512V119.23968h621.4912c33.78176 0 59.51488 29.41952 59.51488 44.13952h28.42624c0-32.6656-40.57088-72.56576-87.94112-72.56576H53.08416v501.69856c0 48.48128 39.46496 87.93088 87.94624 87.93088v-28.42624c-32.82944 0-59.52-26.69568-59.52-59.50464z" fill="#54D3FE" ></path>' +
    '' +
    '</symbol>' +
    '' +
    '</svg>'
  var script = function() {
    var scripts = document.getElementsByTagName('script')
    return scripts[scripts.length - 1]
  }()
  var shouldInjectCss = script.getAttribute("data-injectcss")

  /**
   * document ready
   */
  var ready = function(fn) {
    if (document.addEventListener) {
      if (~["complete", "loaded", "interactive"].indexOf(document.readyState)) {
        setTimeout(fn, 0)
      } else {
        var loadFn = function() {
          document.removeEventListener("DOMContentLoaded", loadFn, false)
          fn()
        }
        document.addEventListener("DOMContentLoaded", loadFn, false)
      }
    } else if (document.attachEvent) {
      IEContentLoaded(window, fn)
    }

    function IEContentLoaded(w, fn) {
      var d = w.document,
        done = false,
        // only fire once
        init = function() {
          if (!done) {
            done = true
            fn()
          }
        }
        // polling for no errors
      var polling = function() {
        try {
          // throws errors until after ondocumentready
          d.documentElement.doScroll('left')
        } catch (e) {
          setTimeout(polling, 50)
          return
        }
        // no errors, fire

        init()
      };

      polling()
        // trying to always fire before onload
      d.onreadystatechange = function() {
        if (d.readyState == 'complete') {
          d.onreadystatechange = null
          init()
        }
      }
    }
  }

  /**
   * Insert el before target
   *
   * @param {Element} el
   * @param {Element} target
   */

  var before = function(el, target) {
    target.parentNode.insertBefore(el, target)
  }

  /**
   * Prepend el to target
   *
   * @param {Element} el
   * @param {Element} target
   */

  var prepend = function(el, target) {
    if (target.firstChild) {
      before(el, target.firstChild)
    } else {
      target.appendChild(el)
    }
  }

  function appendSvg() {
    var div, svg

    div = document.createElement('div')
    div.innerHTML = svgSprite
    svgSprite = null
    svg = div.getElementsByTagName('svg')[0]
    if (svg) {
      svg.setAttribute('aria-hidden', 'true')
      svg.style.position = 'absolute'
      svg.style.width = 0
      svg.style.height = 0
      svg.style.overflow = 'hidden'
      prepend(svg, document.body)
    }
  }

  if (shouldInjectCss && !window.__iconfont__svg__cssinject__) {
    window.__iconfont__svg__cssinject__ = true
    try {
      document.write("<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>");
    } catch (e) {
      console && console.log(e)
    }
  }

  ready(appendSvg)


})(window)
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class JsScriptsService {

  constructor() { this.loadScript(); }

  public loadScript() {
    var isFound = false;
    var scripts = document.getElementsByTagName('script');
    for (i = 0; i < scripts.length; ++i) {
      if (scripts[i].getAttribute('src') != null && scripts[i].getAttribute('src').includes('loader')) {
        isFound = true;
      }
    }

    if (!isFound) {
      const dynamicScripts = [
        'assets/js/jquery.min.js',
        'assets/js/popper.min.js',
        'assets/js/bootstrap.min.js',
        //'assets/js/horizontal-menu.js',
        // 'assets/js/jquery.loading-indicator.js',
        // 'assets/js/app-script.js',
        // 'assets/plugins/Chart.js/Chart.min.js',
        // 'assets/plugins/vectormap/jquery-jvectormap-2.0.2.min.js',
        // 'assets/plugins/vectormap/jquery-jvectormap-world-mill-en.js',
        // 'assets/plugins/jquery.easy-pie-chart/jquery.easypiechart.min.js',
        // 'assets/plugins/sparkline-charts/jquery.sparkline.min.js',
        // 'assets/plugins/jquery-knob/excanvas.js',
        // 'assets/plugins/jquery-knob/jquery.knob.js',
        // 'assets/js/index.js',
        //'assets/plugins/simplebar/js/simplebar.js',
        ];

      for (var i = 0; i < dynamicScripts.length; i++) {
        let node = document.createElement('script');
        node.src = dynamicScripts[i];
        node.type = 'text/javascript';
        node.async = false;
        node.charset = 'utf-8';
        document.getElementsByTagName('head')[0].appendChild(node);
      }

    }
  }
}

import { Component } from '@angular/core';
import { environment } from '../environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-app';

  subscriberId = environment.subscriberId;
  applicationIdentifier = environment.applicationIdentifier;

styles = {
    bellButton: {
      root: {
        svg: {
          color: 'white',
          width: '45px',
          height: '40px',
          fill: 'white',
        },
      },
      dot: {
        rect: {
          fill: 'rgb(221, 0, 49)',
          strokeWidth: '0.2',
          stroke: 'white',
          width: '3.5px',
          height: '3.5px',
        },
        left: '40%',
      },
    },
    header: {
      root: {
        backgroundColor: '',
        '&:hover': { backgroundColor: '' },
        '.some_class': { color: '' },
      },
    },
    layout: {
      root: {
        backgroundColor: '',
      },
    },
    popover: {
      arrow: {
        backgroundColor: '',
        border: '',
      },
    },
  };

  sessionLoaded = (data: unknown) => {
    console.log('loaded', { data });
  };
}
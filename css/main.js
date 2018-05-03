import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  'import': 'url(https://fonts.googleapis.com/css?family=Lato:400,100,300,700)',
  '*': {
    'boxSizing': 'border-box'
  },
  '*:before': {
    'boxSizing': 'border-box'
  },
  '*:after': {
    'boxSizing': 'border-box'
  },
  'body': {
    'wordWrap': 'break-word'
  },
  'body': {
    'fontFamily': '"Lato", Helvetica, Verdana, sans-serif',
    'fontWeight': '400',
    'fontSize': [{ 'unit': 'rem', 'value': 1.6875 }]
  },
  'btn': {
    'fontFamily': '"Lato", Helvetica, Verdana, sans-serif',
    'fontWeight': '400',
    'fontSize': [{ 'unit': 'rem', 'value': 1.6875 }]
  },
  'img': {
    'width': [{ 'unit': 'string', 'value': 'auto' }],
    'height': [{ 'unit': 'string', 'value': 'auto' }]
  },
  'a': {
    'WebkitTransition': 'all 0.5s',
    'transition': 'all 0.5s'
  },
  'p': {
    'lineHeight': [{ 'unit': 'px', 'value': 1.5 }],
    'fontWeight': '300',
    'marginTop': [{ 'unit': 'rem', 'value': 2 }]
  },
  '::-moz-selection': {
    'background': 'rgba(82, 203, 180, 0.34)'
  },
  '::selection': {
    'background': 'rgba(82, 203, 180, 0.34)'
  },
  // *
 * Background header
  'image-wrap': {
    'position': 'relative',
    'backgroundColor': '#000000',
    'width': [{ 'unit': '%H', 'value': 1 }],
    'height': [{ 'unit': 'px', 'value': 500 }],
    'top': [{ 'unit': 'px', 'value': 0 }],
    'left': [{ 'unit': 'px', 'value': 0 }]
  },
  'image-wrap regular': {
    'position': 'absolute',
    'width': [{ 'unit': '%H', 'value': 1 }],
    'minHeight': [{ 'unit': 'px', 'value': 600 }],
    'backgroundSize': 'cover',
    'WebkitTransform': 'translate3d(0, 0, 0)'
  },
  'image-wrap blurred': {
    'position': 'absolute',
    'width': [{ 'unit': '%H', 'value': 1 }],
    'minHeight': [{ 'unit': 'px', 'value': 600 }],
    'backgroundSize': 'cover',
    'WebkitTransform': 'translate3d(0, 0, 0)'
  },
  'image-wrap regular': {
    'opacity': '1',
    'background': 'url(https://raw.githubusercontent.com/woodlik/myResume/master/img/feedback.jpg) no-repeat center center'
  },
  'image-wrap blurred': {
    'opacity': '0',
    'background': 'url(https://raw.githubusercontent.com/woodlik/myResume/master/img/feedback.jpg) no-repeat center center'
  },
  // *
 * Header & Highlight
  'header-hero': {
    'position': 'absolute',
    'width': [{ 'unit': '%H', 'value': 1 }],
    'height': [{ 'unit': 'px', 'value': 500 }],
    'paddingTop': [{ 'unit': 'px', 'value': 75 }],
    'textAlign': 'left',
    'color': '#fff',
    'top': [{ 'unit': 'px', 'value': 0 }]
  },
  'header-hero:before': {
    'position': 'absolute',
    'content': '''',
    'top': [{ 'unit': 'px', 'value': 0 }],
    'left': [{ 'unit': 'px', 'value': 0 }],
    'width': [{ 'unit': '%H', 'value': 1 }],
    'height': [{ 'unit': 'px', 'value': 600 }],
    'zIndex': '0',
    'background': '-webkit-linear-gradient(left, rgba(32, 147, 240, 0.75) 0%, rgba(25, 210, 116, 0.75) 100%)',
    'background': 'linear-gradient(to right, rgba(32, 147, 240, 0.75) 0%, rgba(25, 210, 116, 0.75) 100%)'
  },
  'header-hero-text': {
    'marginTop': [{ 'unit': 'px', 'value': 100 }]
  },
  'header-hero-btn': {
    'marginTop': [{ 'unit': 'px', 'value': 25 }]
  },
  // *
 * Base
  'h1': {
    'fontSize': [{ 'unit': 'rem', 'value': 5 }],
    'fontWeight': '100',
    'marginBottom': [{ 'unit': 'px', 'value': 0 }]
  },
  'h2': {
    'fontSize': [{ 'unit': 'rem', 'value': 3 }],
    'fontWeight': '300'
  },
  'h3': {
    'fontSize': [{ 'unit': 'rem', 'value': 3 }],
    'fontWeight': '300'
  },
  'a': {
    'color': 'black'
  },
  'a:hover': {
    'color': 'black'
  },
  'text-skills': {
    'paddingTop': [{ 'unit': 'px', 'value': 180 }],
    'textAlign': 'center'
  },
  // *
 * The color
  'color-green': {
    'color': '#21B5B7'
  },
  'color-green:hover': {
    'color': '#21B5B7'
  },
  'color-white': {
    'color': '#FFFFFF'
  },
  'color-white:hover': {
    'color': '#FFFFFF'
  },
  'color-twitter:hover': {
    'color': '#00f0ff'
  },
  'color-linkedin:hover': {
    'color': '#0050ea',
    'borderRadius': '20%'
  },
  'color-instagram:hover': {
    'color': 'violet',
    'borderRadius': '20%'
  },
  'color-facebook:hover': {
    'color': 'blue',
    'borderRadius': '20%'
  },
  'color-telegram:hover': {
    'color': 'rgb(10, 70, 201)',
    'borderRadius': '20%'
  },
  'color-black:hover': {
    'color': '#2c2c2c'
  },
  'color-stack-overflow:hover': {
    'color': '#ed710c'
  },
  'color-dribbble:hover': {
    'color': '#e82397',
    'borderRadius': '50%'
  },
  'color-behance:hover': {
    'color': '#0050ea'
  },
  // *
 * Icon stuff
  'fa-2x': {
    'fontSize': [{ 'unit': 'em', 'value': 1.5 }]
  },
  'nearby': {
    'padding': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'px', 'value': 1 }, { 'unit': 'px', 'value': 1 }, { 'unit': 'px', 'value': 1 }]
  },
  // *
 * Button "Get in touch"
  'btn': {
    'fontSize': [{ 'unit': 'rem', 'value': 1.6875 }],
    'WebkitTransition': 'all 0.5s ease-in-out',
    'transition': 'all 0.5s ease-in-out'
  },
  'btn-outline': {
    'border': [{ 'unit': 'string', 'value': 'solid' }, { 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': '#fff' }],
    'backgroundColor': 'transparent',
    'color': '#fff',
    'borderRadius': '50px',
    'paddingLeft': [{ 'unit': 'px', 'value': 30 }],
    'paddingRight': [{ 'unit': 'px', 'value': 30 }]
  },
  'btn-outline:hover': {
    'backgroundColor': 'rgba(255, 255, 255, 0.3)',
    'border': [{ 'unit': 'string', 'value': 'solid' }, { 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': '#fff' }],
    'color': '#fff'
  },
  // *
 * Navigation bar
  'navbar': {
    'background': 'transparent',
    'border': [{ 'unit': 'string', 'value': 'none' }],
    'boxShadow': [{ 'unit': 'string', 'value': 'none' }, { 'unit': 'string', 'value': 'none' }, { 'unit': 'string', 'value': 'none' }, { 'unit': 'string', 'value': 'none' }],
    'color': '#fff',
    'zIndex': '100',
    'marginBottom': [{ 'unit': 'px', 'value': 0 }],
    'borderRadius': '0',
    'paddingTop': [{ 'unit': 'px', 'value': 20 }],
    'WebkitTransition': 'all 0.5s',
    'transition': 'all 0.5s'
  },
  'navbar-nav': {
    'float': 'right'
  },
  'navbar navbar-nav li': {
    'marginLeft': [{ 'unit': 'px', 'value': 10 }]
  },
  'navbar navbar-nav li a': {
    'color': '#fff',
    'background': 'transparent'
  },
  'navbar navbar-nav li a:before': {
    'content': '''',
    'borderBottom': [{ 'unit': 'string', 'value': 'solid' }, { 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': '#fff' }],
    'position': 'absolute',
    'bottom': [{ 'unit': 'px', 'value': 0 }],
    'width': [{ 'unit': 'px', 'value': 0 }],
    'WebkitTransition': 'width 0.2s ease',
    'transition': 'width 0.2s ease'
  },
  'navbar navbar-nav li a:after': {
    'content': '''',
    'borderBottom': [{ 'unit': 'string', 'value': 'solid' }, { 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': '#fff' }],
    'position': 'absolute',
    'bottom': [{ 'unit': 'px', 'value': 0 }],
    'width': [{ 'unit': 'px', 'value': 0 }],
    'WebkitTransition': 'width 0.2s ease',
    'transition': 'width 0.2s ease'
  },
  'navbar navbar-nav li a:before': {
    'left': [{ 'unit': 'px', 'value': 0 }]
  },
  'navbar navbar-nav li a:after': {
    'right': [{ 'unit': 'px', 'value': 0 }]
  },
  'navbar navbar-nav li a:hover:before': {
    'width': [{ 'unit': '%H', 'value': 0.5 }]
  },
  'navbar navbar-nav li a:hover:after': {
    'width': [{ 'unit': '%H', 'value': 0.5 }]
  },
  'navbar-toggle icon-bar': {
    'backgroundColor': '#fff'
  },
  'nav-sticky': {
    'background': '-webkit-linear-gradient(left, rgba(32, 147, 240, 0.75) 0%, rgba(25, 210, 116, 0.75) 100%)',
    'background': 'linear-gradient(to right, rgba(32, 147, 240, 0.75) 0%, rgba(25, 210, 116, 0.75) 100%)',
    'paddingTop': [{ 'unit': 'px', 'value': 0 }]
  },
  // *
 * Section
  'section': {
    'minHeight': [{ 'unit': 'px', 'value': 300 }]
  },
  // *
* Skills
  'section-skills': {
    'padding': [{ 'unit': 'px', 'value': 18 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }],
    'position': 'relative',
    'background': '-webkit-linear-gradient(left, rgba(212, 231, 247, 0.75) 0%, rgba(25, 210, 116, 0.75) 100%)',
    'background': 'linear-gradient(to right, rgba(223, 228, 233, 0.75) 0%, rgba(237, 247, 242, 0.75) 100%)'
  },
  'section-skills p': {
    'color': 'rgb(0, 0, 0)'
  },
  'h3': {
    'color': 'rgb(0, 0, 0)'
  },
  // *
 * About
  'section-intro': {
    'padding': [{ 'unit': 'px', 'value': 50 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 15 }, { 'unit': 'px', 'value': 0 }],
    'position': 'relative'
  },
  'section-grey': {
    'background': '#f5f5f5'
  },
  'img-responsive': {
    'paddingRight': [{ 'unit': 'px', 'value': 0 }],
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'string', 'value': 'auto' }, { 'unit': 'px', 'value': 0 }, { 'unit': 'string', 'value': 'auto' }]
  },
  // *
 * Portfolio
  'section-white': {
    'background': '#fff',
    'padding': [{ 'unit': 'px', 'value': 50 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 70 }, { 'unit': 'px', 'value': 0 }]
  },
  'portfolio filter': {
    'listStyle': 'none',
    'padding': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }],
    'margin': [{ 'unit': 'px', 'value': 20 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 20 }, { 'unit': 'px', 'value': 0 }],
    'textAlign': 'center'
  },
  'portfolio filter li': {
    'display': 'inline-block',
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }]
  },
  'portfolio filter li:before': {
    'display': 'inline-block',
    'content': '"/"',
    'padding': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 25 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 19 }],
    'color': 'rgba(0, 0, 0, 0.2)'
  },
  'portfolio filter li:first-child:before': {
    'display': 'none'
  },
  'portfolio filter li a': {
    'textTransform': 'uppercase',
    'fontSize': [{ 'unit': 'px', 'value': 14 }],
    'color': '#cecece'
  },
  'portfolio filter li a:hover': {
    'color': '#2093F0',
    'textDecoration': 'none'
  },
  'portfolio filter li a:focus': {
    'color': '#2093F0',
    'textDecoration': 'none'
  },
  'space-2x': {
    'paddingBottom': [{ 'unit': 'px', 'value': 48 }]
  },
  'cs-style-3 figure': {
    'marginTop': [{ 'unit': 'px', 'value': 30 }],
    'marginBottom': [{ 'unit': 'px', 'value': 5 }],
    'position': 'relative',
    'overflow': 'hidden'
  },
  'cs-style-3 figure:hover': {
    'cursor': 'pointer'
  },
  'cs-style-3 figure:hover img': {
    'opacity': '1'
  },
  'cs-style-3 figure:hover figcaption': {
    'opacity': '1',
    'zIndex': '100',
    'WebkitTransform': 'translateY(0px)',
    'transform': 'translateY(0px)'
  },
  'cs-style-3 figure img': {
    'maxWidth': [{ 'unit': '%H', 'value': 1 }],
    'display': 'block',
    'position': 'relative',
    'WebkitTransition': 'opacity 0.5s, -webkit-transform 0.5s',
    'transition': 'opacity 0.5s, -webkit-transform 0.5s',
    'transition': 'transform 0.5s, opacity 0.5s',
    'transition': 'transform 0.5s, opacity 0.5s, -webkit-transform 0.5s',
    'opacity': '0.4'
  },
  'cs-style-3 figure figcaption': {
    'position': 'absolute',
    'padding': [{ 'unit': 'px', 'value': 7 }, { 'unit': 'px', 'value': 20 }, { 'unit': 'px', 'value': 7 }, { 'unit': 'px', 'value': 20 }],
    'background': '-webkit-linear-gradient(left, rgba(32, 147, 240, 0.75) 0%, rgba(25, 210, 116, 0.75) 100%)',
    'background': 'linear-gradient(to right, rgba(32, 147, 240, 0.75) 0%, rgba(25, 210, 116, 0.75) 100%)',
    'height': [{ 'unit': 'px', 'value': 40 }],
    'width': [{ 'unit': '%H', 'value': 1 }],
    'opacity': '0',
    'bottom': [{ 'unit': 'px', 'value': 0 }],
    'WebkitTransform': 'translateY(100%)',
    'transform': 'translateY(100%)',
    'WebkitTransition': 'opacity 0.5s, -webkit-transform 0.5s',
    'transition': 'opacity 0.5s, -webkit-transform 0.5s',
    'transition': 'transform 0.5s, opacity 0.5s',
    'transition': 'transform 0.5s, opacity 0.5s, -webkit-transform 0.5s'
  },
  'cs-style-3 figure figcaption h3': {
    'color': '#fff',
    'width': [{ 'unit': '%H', 'value': 0.5 }],
    'position': 'absolute',
    'fontWeight': '400',
    'fontSize': [{ 'unit': 'rem', 'value': 1.55 }],
    'marginTop': [{ 'unit': 'px', 'value': 5 }]
  },
  'cs-style-3 figure figcaption a': {
    'position': 'relative',
    'float': 'right',
    'display': 'block',
    'padding': [{ 'unit': 'px', 'value': 2 }, { 'unit': 'px', 'value': 10 }, { 'unit': 'px', 'value': 2 }, { 'unit': 'px', 'value': 10 }],
    'color': '#fff'
  },
  'cs-style-3 figure figcaption a:hover': {
    'color': '#cecece'
  },
  'cs-style-3 figure figcaption a i': {
    'fontSize': [{ 'unit': 'rem', 'value': 1.40625 }]
  },
  // *
 * Contact
  'space-contact': {
    'paddingBottom': [{ 'unit': 'px', 'value': 50 }],
    '<w768': {
      'paddingBottom': [{ 'unit': 'px', 'value': 75 }]
    }
  },
  'space': {
    'paddingBottom': [{ 'unit': 'px', 'value': 20 }]
  },
  'rounded': {
    'width': [{ 'unit': 'px', 'value': 120 }],
    'borderRadius': '50%'
  },
  'space-top': {
    'paddingTop': [{ 'unit': 'px', 'value': 20 }]
  },
  'btn-radius-false': {
    'borderRadius': '0px'
  },
  // *
 * Footer
  'footer': {
    'background': '#2093F0',
    'color': '#fff'
  },
  'footer p': {
    'marginTop': [{ 'unit': 'rem', 'value': 1.25 }],
    'marginBottom': [{ 'unit': 'rem', 'value': 1.25 }]
  },
  // *
 * Button scrolling up
  '#to-top': {
    'display': 'none',
    'backgroundColor': '#fff',
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }],
    'position': 'fixed',
    'bottom': [{ 'unit': '%V', 'value': 0.02 }],
    'right': [{ 'unit': '%H', 'value': 0.01 }],
    'width': [{ 'unit': 'px', 'value': 50 }],
    'height': [{ 'unit': 'px', 'value': 50 }],
    'zIndex': '99',
    'borderRadius': '50px',
    'WebkitTransition': 'background 0.1s linear 0s',
    'transition': 'background 0.1s linear 0s',
    'boxShadow': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 1 }, { 'unit': 'px', 'value': 6 }, { 'unit': 'string', 'value': 'rgba(0, 0, 0, 0.35)' }]
  },
  '#to-top:hover': {
    'backgroundColor': '#19D274'
  },
  '#to-top i': {
    'fontSize': [{ 'unit': 'px', 'value': 30 }],
    'color': '#19D274',
    'position': 'absolute',
    'left': [{ 'unit': '%H', 'value': 0.5 }],
    'top': [{ 'unit': '%V', 'value': 0.5 }],
    'marginTop': [{ 'unit': 'px', 'value': -16 }],
    'marginLeft': [{ 'unit': 'px', 'value': -10 }],
    'lineHeight': [{ 'unit': 'em', 'value': 1 }]
  },
  '#to-top:hover i': {
    'color': '#fff'
  }
});

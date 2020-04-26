# Research

TODO
- Test Netlify rollback
- Try redux-persist
- Try react-hook-form
- Evaluate performance impact of integrations
- Try new React profiler
- Try redux-saga
- Analyze bundle size

Development build checks
- Does hot reloading work (check both css and js)?

Production build checks
- Are static files hashed?
- Are the static file paths absolute?
- Is there a flash of unstyled text?
- Are the js chunks optimized per page? 
- Is the js minified?
- How fast is the production website (using PageSpeed)?
- Are source maps working (if you click on an error, does the browser jump to the correct line)?
- Does it work in all supported browsers (check both css and js)?
- Does routing work (both push state and full page load)? 
- Do REACT_APP vars work?
- Are static files compressed? Yes, Netlify does this for us.
- Are static files cached? Yes, Netlify does this for us.
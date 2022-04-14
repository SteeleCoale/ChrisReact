# ChrisReact

This repo was created to show the basics of React functional components.

Checkout the <code>jsFunctions.js</code> file to see a couple of typical js functions and their syntax.
Then checkout the <code>FirstComponent.js</code> file at chris_app/src/FirstComponent.js.
### Those things look pretty darn similar yeah?

The thing to notice is that in the return statement of the functional component there are some parenthesis. Inside of those parenthesis you can write html, <code>{ javascript inside curly braces like these }</code> or even use other React Components which would look like this: <code><ComponentName \/></code>

Now checkout the <code>SecondComponent.js</code> file. Here we see the idea of props passed to a component. Think of a component's props as very similar to the arguments that you would pass to a normal function. Like 4 and 5 when we just added values in those .js functions. A component's props allow you to pass values into your functional components so you can reuse the component but give it a different props argument on each instantiation of the component.
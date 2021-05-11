export default function createKeyboardListener() {
   const state = {
      observers: []
   };

   function subscribe(observerFunction) {
      state.observers.push(observerFunction);
   }

   function notifyAll(command) {
      for (const observerFunction of state.observers) {
         observerFunction(command);
      }
   }

   document.addEventListener('keydown', handleKeydown);

   function handleKeydown(event) {
      const keyPressed = event.key;
      const direction = event.code.substring(5).toLowerCase()

      const command = { keyPressed, direction };

      notifyAll(command);
   }

   return { subscribe }

}

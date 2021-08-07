(() => {
    /**
     * Wait for the page to be ready before firing JS.
     *
     * @param {function} callback - A callable function to be executed.
     * @param {string} [requestedState=complete] - document.readyState to wait for. Defaults to 'complete', can be 'interactive'.
     */
    const wprdOnReady = (callback, requestedState) => {
        requestedState = requestedState || 'complete';
        const checkState = state => requestedState === 'interactive' ? state !== 'loading' : state === 'complete';

        // If we have reached the correct state, fire the callback.
        if (checkState(document.readyState)) {
            callback();
            return;
        }
        // We are not yet in the correct state, attach an event handler, only fire once if the requested state is 'interactive'.
        document.addEventListener('readystatechange', event => {
            if (checkState(event.target.readyState)) {
                callback();
            }
        }, {once: requestedState === 'interactive'});
    };

    console.debug('adding event dispatcher on document.readyState === complete');
    wprdOnReady(() => {
        console.debug('firing event');
        document.dispatchEvent(new CustomEvent('wprdEvent'));
    });
})();

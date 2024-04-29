// "this" keyword can be used to access current context.

const user={
    username:"Daniyal",
    price:999,

    welcomeMessage: function () {
        console.log(`${this.username} , welcome to website.`);
        // console.log(this);
    }

    // "this" refers current context.
}

// user.welcomeMessage()
// user.username="Shayan"  // we changed the context and then we call.
// user.welcomeMessage()

console.log(this);

// the global object in the browser is the "Window".


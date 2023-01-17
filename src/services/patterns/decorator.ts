interface UserArmor {
    protect(): string;
}

/**
 * Player provides default implementations of the protect method. There
 * might be several variations of these classes.
 */
class Player implements UserArmor {
    public protect(): string {
        return 'Reduces 50% of harm';
    }
}

/**
 * The base Decorator class follows the same interface as the other components.
 * The primary purpose of this class is to define the wrapping interface for all
 * concrete decorators. The default implementation of the wrapping code might
 * include a field for storing a wrapped component and the means to initialize
 * it.
 */
class CustomArmor implements UserArmor {
    protected component: UserArmor;

    constructor(component: UserArmor) {
        this.component = component;
    }

    /**
     * The CustomArmor delegates all work to the wrapped component.
     */
    public protect(): string {
        return this.component.protect();
    }
}

/**
 * Concrete CustomArmors call the wrapped object and alter its result in some way.
 */
class GoldenArmor extends CustomArmor {
    /**
     * CustomArmors may call parent implementation of the protect, instead of
     * calling the wrapped object directly. This approach simplifies extension
     * of decorator classes.
     */
    public protect(): string {
        return `Power up 10% (${super.protect()})`;
    }
}

/**
 * CustomArmors can execute their behavior either before or after the call to a
 * wrapped object.
 */
class SilverArmor extends CustomArmor {
    public protect(): string {
        return `Protects additional 10% of harm (${super.protect()})`;
    }
}

/**
 * The client code works with all objects using the Component interface. This
 * way it can stay independent of the concrete classes of components it works
 * with.
 */
function playGame(component: UserArmor) {
    console.log(`RESULT: ${component.protect()}`);
}

/**
 * This way the client code can support both simple components...
 */
const simple = new Player();
console.log('Client: This player has the default armor:');
playGame(simple);
console.log('');

/**
 * ...as well as decorated ones.
 *
 * Note how decorators can wrap not only simple components but the other
 * decorators as well.
 */
const decorator1 = new SilverArmor(simple);
const decorator2 = new GoldenArmor(decorator1);
console.log('Client: Now the player has a decorated armor:');
playGame(decorator2);

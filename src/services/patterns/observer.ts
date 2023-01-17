/**
 * The Subject interface declares a set of methods for managing subscribers.
 */
interface Subject {
    attach(observer: Observer): void;
    detach(observer: Observer): void;
    notify(): void;
}

type State = 'out of stock' | 'in stock'

class Store implements Subject {

    public state: State = "out of stock";

    private observers: Observer[] = [];

    /**
     * The subscription management methods.
     */
    public attach(observer: Observer): void {
        const isExist = this.observers.includes(observer);
        if (isExist) {
            return console.log('Subject: Observer has been attached already.');
        }

        console.log('Subject: Attached an observer.');
        this.observers.push(observer);
    }

    public detach(observer: Observer): void {
        const observerIndex = this.observers.indexOf(observer);
        if (observerIndex === -1) {
            return console.log('Subject: Nonexistent observer.');
        }

        this.observers.splice(observerIndex, 1);
        console.log('Subject: Detached an observer.');
    }

    /**
     * Trigger an update in each subscriber.
     */
    public notify(): void {
        console.log('Subject: Notifying observers...');
        for (const observer of this.observers) {
            observer.getUpdate(this);
        }
    }

    public newProductArrived(): void {
        console.log('\nSubject: A new product arrived to the store.');
        this.state = 'in stock';

        console.log(`Subject: My state has just changed to: ${this.state}`);
        this.notify();
    }
}

/**
 * The Observer interface declares the update method, used by subjects.
 */
interface Observer {
    getUpdate(subject: Subject): void;
}

class UserStore implements Observer {
    public getUpdate(subject: Subject): void {
        if (subject instanceof Store && subject.state === 'in stock') {
            console.log('UserStore: Reacted to the event.');
        }
    }
}

/**
 * Example on how this will run in the client
 */

const subject = new Store();

const observer1 = new UserStore();
subject.attach(observer1);

const observer2 = new UserStore();
subject.attach(observer2);

subject.newProductArrived();
subject.newProductArrived();

subject.detach(observer2);

subject.newProductArrived();

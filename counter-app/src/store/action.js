export function increment() {
    return {
        type: "increment",

    }
}

export function decrement() {
    return {
        type: "decrement",
    }
}

export function rest() {
    return {
        type: "reset"
    }
}

export function updateStep(step) {
    return {
        type: 'changeStep',
        payload: step
    }
}

export function updateMax(max) {
    return {
        type: 'changeMax',
        payload: max
    }
}
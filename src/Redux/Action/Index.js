export const Increment = 'increment'
export const Decrement = 'decrement'


//action creator
export const increment = (counterCaption) => ({
        type: Increment,
        counterCaption
    }
)
export const decrement = (counterCaption) => ({
    type: Decrement,
    counterCaption
})

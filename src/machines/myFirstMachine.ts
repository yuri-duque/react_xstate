import { createMachine } from "xstate";

export const myMachine = createMachine({
    /** @xstate-layout N4IgpgJg5mDOIC5QAoC2BDAxgCwJYDswBKAOnwHsAXACXIDcwAnSAYgFkB5AVQGUBRDgDU+AJQDaABgC6iUAAdysXJVzl8skAA9EARgAcANhIBmACzGA7AFYANCACeu4wCYAvq7toseQqWz0mVk5eAS4AFUkZJBAFJRU1DW0EHQBOUxIrFMtbB0Q9HQz3DxAKCDgNLxwCYg1Y5VV1aKSAWgM7RwRW908MKt8yKloGZghaxXqEpsRTZ3a8iwy9Y2WV1eXukEqfYhJ-YcgxuIbExDMrElSrYx1nHI6UiRIJJbXXotcgA */
    initial: "notHovered",
    states: {
        notHovered: {
            on: {
                MOUSEOVER:{
                    target: "hovered",
                },
            },
        },
        hovered: {
            on: {
                MOUSEOUT: {
                    target: "notHovered",
                }
            }
        }
    } 
});
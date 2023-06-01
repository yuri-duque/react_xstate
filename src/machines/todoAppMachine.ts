import { createMachine } from "xstate";

export const todoAppMachine = createMachine({
    /** @xstate-layout N4IgpgJg5mDOIC5QBUD2FUFkCGALAlgHZgB0ANqthEVGhrAMTIDyAIswMoAyzAgqwFFWAbQAMAXUSgADqlj4ALvlSEpIAB6IAjAE4AzCT06AHABY9AdgCsAGhABPRMa0krAXzd26WPEVIUqGm9GHn4ASQA5AHEWdg4AMV4wriExSSQQWXklFTVNBC1jYxIAJgs9PS0rUxKdADZjaztHArqrElELOq0LQusPTxBCdDg1bxwCYjUsxWVVDPyAWjrmxGWPL3QfSf9KakJaLfgMmZz50Hya1YQiklMtOsen57qLDZBx32ISBS2uPcg0zks1yC0QpisxVEpn0D1MojqJVsDicLncg0+O3IeyCWwEACd8ah8YCTsCznlwVYLB1RKI9I8SlpRPomijWu1Ot1eo10R4gA */
    initial: "loadingTodos",

    states: {
        loadingTodos: {
            on: {
                TODOS_LOADED: "todoLoaded",
                LOADING_TODOS_FAILED: "loadingTodoErrored"
            }
        },

        todoLoaded: {},
        loadingTodoErrored: {}
    },

    id: "TodoMahine"
});
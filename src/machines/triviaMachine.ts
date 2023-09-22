import { assign, createMachine } from "xstate";
import { RMCharacter } from "../common/types";

export const triviaMachine = createMachine({
  /** @xstate-layout N4IgpgJg5mDOIC5QBUBOBLAbughgAgFkcBjAC3QDswBCAOgGUAXHVRyqPNLXAYiZcYBtAAwBdRKAAOAe1jo20ihJAAPRAEYAHMNoB2dfoCcwgMyHjuzepMAaEAE9EJgEwnaANnXvDAVmGaAFhNhLwDdAF9wuy5sfCIyShpaAEkKWEZUAFdiBQo8AFtpCBwAGzxpSTAqCB4AQWJiMElGPFT0rJz0RVgRcSQQGTlc5TUEZy1adR9DEx9xsOdDdVM7RwQApdphd3dnd1MvXV0A9UjojFjCEnIqOjaM7NyCotLyyuqeACUwACswHNaaQenW6vWUg3kXSU-VGrk0tF8410nj2hgCmhmq0Qe3h7lmu3UrmczgCzmEATOIBiuCuCVutGp+HSAkgtAAMtIcBB2HhPjgKBBpPk8ABhUgsEiMMCoHiCqi0SiYaQAazADIuNPiNySjLwzNYrI5XJ5fIFQtF4tQkulCEV0mIOFyvTB-QhwxhiDmzg8OxJuiWhhJxKxCBMy1ozk0KPU6gCAXcYQpUSpGri10SdF1+qlEHZnO5FA4psFwrFEpy0p40tQ0lQtEkJUdADNa-l1dw03Sdam9cwDbmjQWi-ySxby1LULaKEqHU6xC6pLJIYoRohND4fLRpnHzOifO5NLMQ7H4Ru5scfPpthFk7qtRn25ds4b8yaR+ay1aK6hYLLFGq7VVR9NXTeksz7HM82NQteXfUtLWtH8pxnR0oWdMRwSXd1QFGGNL0mHwtHXbwZkMbwQxMQ8PDjdwfBMXQSVMZwfEpO9QO7DtexZAdXxg4sPwQ79f2rWt60bRgW1QNs2K7TMe2fHjoOHM14PHaVYGQ+1UMUdC+kXIYoVXBB129MlmLDRZjn0AIQ1cNwfHRckNgCYQjjCdxWJ7e8wPkiDWQARUyOBcloQLgqhPBajSAB3aVaAAVQoflYFi1BIDwML0ihPgwBKf4WiilLpQXAYsMMj0EC0ZxdC3dxdHJSwkW2QwQ2mdRqJjWZhEvExgk0TzOO8jinz83NMpC8aIsK1LaGm6V0smxQeAAOTAFQWkWihBHUPTSoMlcKuJXQ3HjBz1xcAxXJDHY3HGQNhADMJhG2AbLiGuTOIU0KgqyxRvvCxRIpiuK5rSiAMp+3IVrWjbIbQjDXTKg6cOxMN2usMJ6Oqyzeta7ZaE0dcMV2bYTjRV6QNk4CmVG-7fooWgRRKILGeZsBOGkaQSjYSRRRKWRIB4ZBpCgKA8r5oKSrdcqUcqwI3ECYkXP8EkNh8Y9XLcWMQjRB6owYinO21D6Ru4umQqZlnLfZ4WuZ5vAAHl3kF4XRfF62paR6FZa0OYCfGSiE3JUnnGPKZDA8Sy3JcZ6N0N2ljagodOB7T9EN-OUAOnFU1RkxPBx5XU06EzTZ3h0RPf273VEQABaTQapMEmHORNFpm2a72pOeNzuOgJpm0JNzkG9i6ALmCi8EidhNQGs6wbZtW2phOH3HjhJ7UpC7TLnT5wR-Tl2r0Za+WdwCc0Ml6Msf1CZDdF0bCQmrG6-WTHj97l6+zbzam4G61BhacMlqrXWhDAGW1nC7WlsjGuYxFgnTMKSXqD1DCE1sA4RAN9aAmGcuSKwrhkRJmTBQIocBlB5wzJhKuRkT47A8GibGZIEzTBahghAtdZhbDjITEIdV-RBA8reLyo8GAQULqmKhh8jLjB0FGMylEtAnF0OrNhl0tzHDwYSRY1g45CJHlTe4HQniFGKGUCoVRICSOwrAqYNUgzhybnGbqCY77BARK5ZRvhrDrlOHot6IjwLcSsTLWB-c3AMWYvuHx9V6oqLWH7IIpJDy+EvC5f0gjh7+KpoE-sSc3wqTHF+CcwSYGjD8O1CJG4DyERid1Y8ZgEQY0cv6aq0wWJ+MponHJkE16wQKcXaeJSj5rgMATB6OC9h4njMGNhTd4SnUCDMUwG5kQZJTPorpvkzaDj6aOAZ0o8AAFFZ61ksYjahFVYxN1oOiMmxhfBWXQWscYXdnHdT7v3ck78AlbNyZtIZRkpiEj0MohRUw-AuSeU4MMCJWl1V8DMDYL0OlGwfN0gKQCGabSBkVVAALLn7h0EcOiVhwXByhesdQEcXJ1RjhfQmpJvnZN+ZBb+2LQYJSSn-QB4D8U+32PCYlYKNzktasYbBZEcG9WMDsIe6ysmbM+rTNlmKcUzQAeDf55ypGHWEJGH0rlDCNUuroMVOgzBTOldsBMTLFWmz+Zin+gMOUAHEcD5HZg7TA0o+WwL2OiDw-g+6Hgme4a6eIIzbC8AmbRsTbVopZRi8BTq8iuvdezAA6jA6BwyxgJi1tYNEWgvGItaicG5Qcpi3PorMeNPklVm2-tbX1uEokIg3GidclgHJHjYagzcOwHrd0JPRXwdbho0i-o662rMgocztugXmTMBYQBbRoTwZ8UmdsvOuIIcSNAPXahiByeqghkm6u0zJnSE0Nodcmmd1t53c0XY7Z2q7tXWNwuYCOTdgh91sRffdlVD0E18C5EkMcL3jrHrxdeqcp7qTXewmMuIGERNJiw9Qtl8JBhmIEdcSzAjQeXvsn8RyTlgyQ64CMGjLDEU8GGClLcbm+wYoRXqVLIiRCAA */
  id: "Trivia Machine!",
  initial: "Loading Trivia Characters",
  context: {
    characters: [] as RMCharacter[],
    errorMessage: undefined as string | undefined,
    randomCharacter: {} as RMCharacter,
    randomCharacters: [] as RMCharacter[],
    points: 0 as number,
    lifes: 3 as number
  },
  schema: {
    services: {} as {
      loadTriviaCharacters: {
        data: RMCharacter[]
      },
      loadRandomCharacter: {
        data: RMCharacter
      },
      loadRandomCharacters: {
        data: RMCharacter[]
      }
    },
    events: {} as
      | {
        type: "Start";
      } | {
        type: "Accept Instructions";
      } | {
        type: "Reject Instructions";
      } | {
        type: "Select Answer";
      }
      | {
        type: "Next Question"
      }
      | {
        type: "Toggle Clue"
      }
  },
  tsTypes: {} as import("./triviaMachine.typegen").Typegen0,
  states: {
    "Starting Trivia": {
      on: {
        Start: {
          target: "Instruction modal opened",
        }
      }
    },

    "Instruction modal opened": {
      on: {
        "Accept Instructions": "Trivia started",
        "Reject Instructions": "Starting Trivia"
      }
    },

    "Trivia started": {
      states: {
        "Loading Random Character": {
          invoke: {
            src: "loadRandomCharacter",
            onDone: [{target: "Loading Random Characters", actions: "assignRandomCharacterToContext"}],
            onError: "Load Random Character Errored"
          }
        },

        "Loading Random Characters": {
          invoke: {
            src: "loadRandomCharacters",
            onDone: {target: "Question", actions: "assignRandomCharactersToContext"},
            onError: "Load Random Character Errored"
          }
        },

        "Load Random Character Errored": {},

        Question: {
          states: {
            "Question Answer": {
              type: "parallel",

              states: {
                "Unanswered Question": {
                  on: {
                    "Select Answer": "Answered Question"
                  }
                },

                "Answered Question": {
                  on: {
                    "Next Question": [{
                      target: "Game Won",
                      cond: "points >= 100"
                    }, {
                      target: "Game Over",
                      cond: "lifes = 0"
                    }, "Unanswered Question"]
                  }
                },

                "Game Over": {},

                "Game Won": {}
              }
            },

            Clue: {
              states: {
                "Clue Tooltip Closed": {
                  on: {
                    "Toggle Clue": "Clue Tooltip Opened"
                  }
                },

                "Clue Tooltip Opened": {
                  on: {
                    "Toggle Clue": "Clue Tooltip Closed"
                  }
                }
              },

              type: "parallel"
            }
          },

          type: "parallel"
        }
      },

      initial: "Loading Random Character"
    },

    "Loading Trivia Characters": {
      invoke: {
        src: "loadTriviaCharacters",
        onDone: [{ target: "Starting Trivia", actions: "assignCharactersToContext" }],
        onError: "Trivia Characters Errored"
      }
    },

    "Trivia Characters Errored": {}
  },

}, {
  actions: {
    assignCharactersToContext: assign((context, event) => {
      return {
        characters: event.data
      }
    }),
    assignRandomCharacterToContext: assign((context,event) => {
      return {
        randomCharacter: event.data
      }
    }),
    assignRandomCharactersToContext: assign((context, event) => {
      return {
        randomCharacters: event.data
      }
    })
  }
});
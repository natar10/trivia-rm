import { assign, createMachine } from "xstate";
import { RMCharacter, RMEpisode } from "../common/types";

export const triviaMachine = createMachine({
  /** @xstate-layout N4IgpgJg5mDOIC5QBUBOBLAbughgAgFkcBjAC3QDswBCAOgGUAXHVRyqPNLXAYiZcYBtAAwBdRKAAOAe1jo20ihJAAPRAEYAHMNoB2dfoCcwgMyHjuzepMAaEAE9EJgEwnaANnXvDAVmGaAFhNhLwDdAF9wuy5sfCIyShpaAEkKWEZUAFdiBQo8AFtpCBwAGzxpSTAqCB4AQWJiMElGPFT0rJz0RVgRcSQQGTlc5TUEZy1adR9DEx9xsOdDdVM7RwQApdphd3dnd1MvXV0A9UjojFjCEnIqOjaM7NyCotLyyuqeACUwACswHNaaQenW6vWUg3kXSU-VGrk0tF8410nj2hgCmhmq0Qe3h7lmu3UrmczgCzmEATOIBiuCuCVutGp+HSAkgtAAMtIcBB2HhPjgKBBpPk8ABhUgsEiMMCoHiCqi0SiYaQAazADIuNPiNySjLwzNYrI5XJ5fIFQtF4tQkulCEV0mIOFyvTB-QhwxhiA28OsPhcrh8ATx7mOWIQJk0bncAUDvt0JNMzh8lN1WsSdF1+qlEHZnO5FA4psFwrFEpy0p40tQ0lQtEkJUdADNq-l1dw4tc063LpnDbmTfyixbS1LULaKEqHU6xC6pLJIYoRohND4fLRptHzOifO4Iz5Q+p0WuV85jj59NsIlEqRr23SdTe9cwDdmjXmCwPzSWrWXULBZYo1TtVUu01Dt6QzJ8sxzY1815D9i0ta1fzHCdHShZ0xHBOd3VAUZ1CmXRJh8LRl28GZDG8UNw0jaN3FjeMXCTK8UzA+820fFkXz7WDC0-RCfz-Stq1retGCbVAWxYu90wfHsuJg98zQQ4dpVgFD7TQxQML6WchihRcEGXZxaDJRMTEJQxjn0AJQ1cNwA20DcAmEI4wncZMH1TcDZMg1kAEVMjgXJaACoKoTwWo0gAd2lWgAFUKH5WAYtQSA8FC9IoT4MASn+FpIuS6UZwGbD9I9BAtBPNdg3JSwkW2QxQ2mdQPBOH1hDPExgk0Dz2K8tju187MMuCkbwoKlLaAm6U0rGxQeAAOTAFQWjmihirdMrcOxcyWusMITDjONLK6prtloTRlwxXZthONFesufqZPYuSQsCzLFDesLFAi6LYum1KIHS97ckW5bVpB9D1B0kq9IXcriV0NwYy3FwDBc0MdjccZDDJJY0V0YRtge0DpJApkhq+j6KCpp4Aamv7AeB76KDBlbmepwRnBhzb4e2sZFmRsxSS64RzEu2wHEQXRDHhEwNmc9FCUOqMSdvbVnsGzjaahWgRRKQK9YNsBOGkaQSjYSRRRKWRIB4ZBpCgKBcutwKNtKvnVGxNraAWUltEJpGOv3UxvWc1xZd0PwzGcNXaQ18mOOfHXPv1w205Nh3zctvAAHl3jth2nZdjP3bh6F+ZJWZfeI7wo12OjNH3fCWuMQJA0sGYOpMOOnsT161qNw3Xx5DPASbf95SAtUpITiDtcHjPoLfV2TdSJt1MndDp0w10PYrr2Ks0SxaGCOMrAVg9thDrrT66rqfGP+v0V71jNZpAfIdT43l9H43x+kBWVAVYax1kbM2ROfd57J0Xj-EesEx7r2kJvTS60d4833gZUI7hT4GHwuicwlh-D7jJAEBE5gKJaF9MIE8PdmKeTfr-WCuovxIT-HKQC44VQzwYWTeBHAWH8RHGpO0W8tLoKwuXAyABaZYhFtg7CjJoHYgZgxNylggbwkxcaqKRjLY4J5X58O4gIh8rCBJAJASJcBElIGMP4ZwMxQjVIoKnKIMu84D6jFkedS6ZJDqWBlpdUMStJhhEulYDqyikaRCvBQIocBlCzzTJIzxMivA4O8KSOMZIozTEaho6RmhjIhGWNYWW5kAy4yMQnfgrAeSMlSThQ+4wdDKNMuGLQJwo77kJmuY45IrDEiWLMJi5w+qMPuB0J4hRihlAqFUSATStqHwIiZUkUwZhRmctuGyGigg6AsFHXw1hlynHoRMsm0CszLM9qMAIfhJizD9LMQMJhgx7LWKuQMF9TDknMIsM8NTOzXN7ApOCSkhzfhHLcrxiA-AtRySuHcxFA7Bw0eUhE+10QuVxscsZ15Llzx8trBxvFlLQtUrCgyxSdDeEJPsbuUdphUSsL7aMB4zDIo2ECi5j1GGgvkkDclUKkJ4AAKLAOrEsveUjyqcpweiO6xhfBWUlmscYLUdn7E6tGPwFI+Wk2JS9Sma1qXyuIi1eW5lPB0RPMsPcGiuqtxPM1KwAZtyx0NerEFJKYFfxpmtX6hVUDmv5lMfYego6dKmPqlY+z1CGF9heLw2hdjHOBd5E1C8A0pzyPTBKSUUqzQDWG1Z+x4RHF9FYWN5J41fOMKfCi1qzAKINeM-lVy-VQUHkG+mAMS0szLbCGhuJ9j6OKejXQTVG1mDxEEVtKjM0DQ-qa3NfbGa0AAOI4HyCbXOmBpTDuxEojw-gkboi6qSdwmM8QmW2Bk0kSxCYEuSVmrW-qWZ5uDZNHde68AAHVPa8zhWMKMbh8LCy0CcmYnz4UnF9lGEIDkghI1fbw41H6e25ozseiqK4k3Wq8F4OY55HVrFg1sYpMxBYGHA8u9+FMc1fqXmPLOFt0BW31rbCAeHxieARKLQkLkPX1o0AcC6oR-AEXlsohj-c10sZ-mxs2HGrb50Wbx2VaSEZqI8IysWDyxbhhvRiluF1fCkl9GSaD5yO1Gt9dmz91Mh5qgcYgigTY8NeBcqfIIxG7VkZDuMaqmq7KJtxfJwVebXPL1XgAiVUrAbeaWGQ3auN6UHnMORjQxJjL3wfk-QML9vXx07A4wRKlfx4dkRMLJJ5iS3XyeoWyZ51mC0CMuLugQotOKq7ARLICZW6R0-zIpWx03y1RJdNEYQZ1kP8HMZyoznlesiEAA */
  id: "Trivia Machine!",
  initial: "Loading Trivia Characters",
  context: {
    characters: [] as RMCharacter[],
    errorMessage: undefined as string | undefined,
    randomCharacter: {} as RMCharacter,
    randomCharacters: [] as RMCharacter[],
    points: 0 as number,
    lifes: 3 as number,
    clue: {} as RMEpisode,
    question: 1 as number,
    episode: undefined as string | undefined
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
      },
      loadClueInfo: {
        data: RMEpisode
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
      entry: ["goToTriviaPage"],
      states: {
        "Loading Random Character": {
          invoke: {
            src: "loadRandomCharacter",
            onDone: [
              {
                target: "#Trivia Machine!.Trivia started.Loading Random Characters",
                actions: "assignRandomCharacterToContext"
              }
            ],
            onError: "Load Random Character Errored"
          }
        },

        "Loading Random Characters": {
          invoke: {
            src: "loadRandomCharacters",
            onDone: { target: "#Trivia Machine!.Trivia started.Question", actions: "assignRandomCharactersToContext" },
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
                },

                "Loading Clue Info": {
                  invoke: {
                    src: "loadClueInfo",
                    onDone: { target: "Clue Tooltip Closed", actions: "assignClueToContext" },
                    onError: "Load Clue Info Errored"
                  }
                },

                "Load Clue Info Errored": {}
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
      console.log("Assigning characters!!! ", context)
      return {
        characters: event.data
      }
    }),
    assignRandomCharacterToContext: assign((context, event) => {
      console.log("Assigning random character!!! ", context)
      return {
        randomCharacter: event.data
      }
    }),
    assignRandomCharactersToContext: assign((context, event) => {
      console.log("Assigning random characterssss!!! ", context)
      return {
        randomCharacters: event.data
      }
    }),
    assignClueToContext: assign((context, event) => {
      return {
        clue: event.data
      }
    })
  }
});
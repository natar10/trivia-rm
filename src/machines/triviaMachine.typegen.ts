
  // This file was automatically generated. Edits will be overwritten

  export interface Typegen0 {
        '@@xstate/typegen': true;
        internalEvents: {
          "done.invoke.Trivia Machine!.Loading Trivia Characters:invocation[0]": { type: "done.invoke.Trivia Machine!.Loading Trivia Characters:invocation[0]"; data: unknown; __tip: "See the XState TS docs to learn how to strongly type this." };
"done.invoke.Trivia Machine!.Trivia started.Loading Random Character:invocation[0]": { type: "done.invoke.Trivia Machine!.Trivia started.Loading Random Character:invocation[0]"; data: unknown; __tip: "See the XState TS docs to learn how to strongly type this." };
"done.invoke.Trivia Machine!.Trivia started.Loading Random Characters:invocation[0]": { type: "done.invoke.Trivia Machine!.Trivia started.Loading Random Characters:invocation[0]"; data: unknown; __tip: "See the XState TS docs to learn how to strongly type this." };
"done.invoke.Trivia Machine!.Trivia started.Question.Clue.Loading Clue Info:invocation[0]": { type: "done.invoke.Trivia Machine!.Trivia started.Question.Clue.Loading Clue Info:invocation[0]"; data: unknown; __tip: "See the XState TS docs to learn how to strongly type this." };
"xstate.init": { type: "xstate.init" };
        };
        invokeSrcNameMap: {
          "loadClueInfo": "done.invoke.Trivia Machine!.Trivia started.Question.Clue.Loading Clue Info:invocation[0]";
"loadRandomCharacter": "done.invoke.Trivia Machine!.Trivia started.Loading Random Character:invocation[0]";
"loadRandomCharacters": "done.invoke.Trivia Machine!.Trivia started.Loading Random Characters:invocation[0]";
"loadTriviaCharacters": "done.invoke.Trivia Machine!.Loading Trivia Characters:invocation[0]";
        };
        missingImplementations: {
          actions: "goToTriviaPage";
          delays: never;
          guards: "lifes = 0" | "points >= 100";
          services: "loadClueInfo" | "loadRandomCharacter" | "loadRandomCharacters" | "loadTriviaCharacters";
        };
        eventsCausingActions: {
          "assignCharactersToContext": "done.invoke.Trivia Machine!.Loading Trivia Characters:invocation[0]";
"assignClueToContext": "done.invoke.Trivia Machine!.Trivia started.Question.Clue.Loading Clue Info:invocation[0]";
"assignRandomCharacterToContext": "done.invoke.Trivia Machine!.Trivia started.Loading Random Character:invocation[0]";
"assignRandomCharactersToContext": "done.invoke.Trivia Machine!.Trivia started.Loading Random Characters:invocation[0]";
"goToTriviaPage": "Accept Instructions";
        };
        eventsCausingDelays: {
          
        };
        eventsCausingGuards: {
          "lifes = 0": "Next Question";
"points >= 100": "Next Question";
        };
        eventsCausingServices: {
          "loadClueInfo": "done.invoke.Trivia Machine!.Trivia started.Loading Random Characters:invocation[0]";
"loadRandomCharacter": "Accept Instructions";
"loadRandomCharacters": "done.invoke.Trivia Machine!.Trivia started.Loading Random Character:invocation[0]";
"loadTriviaCharacters": "xstate.init";
        };
        matchesStates: "Instruction modal opened" | "Loading Trivia Characters" | "Starting Trivia" | "Trivia Characters Errored" | "Trivia started" | "Trivia started.Load Random Character Errored" | "Trivia started.Loading Random Character" | "Trivia started.Loading Random Characters" | "Trivia started.Question" | "Trivia started.Question.Clue" | "Trivia started.Question.Clue.Clue Tooltip Closed" | "Trivia started.Question.Clue.Clue Tooltip Opened" | "Trivia started.Question.Clue.Load Clue Info Errored" | "Trivia started.Question.Clue.Loading Clue Info" | "Trivia started.Question.Question Answer" | "Trivia started.Question.Question Answer.Answered Question" | "Trivia started.Question.Question Answer.Game Over" | "Trivia started.Question.Question Answer.Game Won" | "Trivia started.Question.Question Answer.Unanswered Question" | { "Trivia started"?: "Load Random Character Errored" | "Loading Random Character" | "Loading Random Characters" | "Question" | { "Question"?: "Clue" | "Question Answer" | { "Clue"?: "Clue Tooltip Closed" | "Clue Tooltip Opened" | "Load Clue Info Errored" | "Loading Clue Info";
"Question Answer"?: "Answered Question" | "Game Over" | "Game Won" | "Unanswered Question"; }; }; };
        tags: never;
      }
  
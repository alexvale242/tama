Each action follows the same pattern: 
- Each action has an associated need
- Need goes up on a timer
- Once it reaches a threshold the user is promted for an action
- Action reduces need
- If need gets too high the tamagotchi dies

The things that differ between actions are: 
- Name
- Context
- Maximum need threshold
- Need action trigger threshold
- Need gain per second
- Action need reduction amount

State of the tamagotchi can be stored in the browser, needs to be based on some sort of time. 

Store datetime last checked and compare to date when user loads. Progress by number of time units since date last checked. 

Need {
    Name: string;
    Id: string;
    CurrentNeedValue: number; 
    MaximumNeedValue: number;
    NeedGainPerUnitTime: number;
    ActionNeedReductionAmount: number;
}

TamagotchiState {
    Name: string;
    Needs: Need[];
    IsAlive: boolean;
    DateCreated: DateTime;
    DateLastChecked: DateTime;
}
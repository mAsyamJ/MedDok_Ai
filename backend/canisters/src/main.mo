actor App{
  public query func predictDisease(input : Text) : async Text {
    return "Predicted Disease: " # input;
  };
  }
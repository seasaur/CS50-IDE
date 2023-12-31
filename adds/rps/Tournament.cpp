#include <iostream>
#include <array>
#include "Referee.h"
#include "Human.h"
#include "Computer.h"
#include "Avalanche.h"
#include "Bureaucrat.h"
#include "Toolbox.h"
#include "Crescendo.h"
#include "FistfullODollars.h"
#include "PaperDoll.h"
#include "RandomComputer.h"
#include "Tournament.h"
#include "Referee.h"

Tournament::Tournament() {

}

Player * Tournament::run(std::array<Player *, 8> competitors){
    Referee referee;
    char results[5];
    Player * winners[4]; //winners array
    int winCount=0; //count for results array
    int loseCount=0;
    int winnerCount = 0; //winner count

    for(int i=0;i<7;i++) { //ROUND 1 matches players 1-2, 3-4, 5-6, 7-8
        for (int j=0;j<5;j++) { //each bracket plays 5 rounds
            results[j] = referee.refGame(competitors[i],competitors[i+1]);
        //check number of wins & losses in terms of player with lower index
            if(results[j] == 'W') {
                winCount++;
            }
            if(results[j] == 'L') {
                loseCount++;
            }
        }
        if(winCount>=loseCount) { //lower index player win or lose
            winners[winnerCount] = competitors[i];
        }
        else {
            winners[winnerCount] = competitors[i+1];
        }
        winnerCount++;
        winCount=0; //resetting counters
        loseCount=0;
        //results[5] = {0};
         i++;
    }
    //winners[4]={0}; //reset winner array
    winnerCount = 0;

    for(int i=0;i<3;i++) { //ROUND 2 matches winners 1-2 3-4
        for(int j=0;j<5;j++) {
            results[j] = referee.refGame(winners[i],winners[i+1]);
         //check number of wins & losses in terms of player with lower index
            if(results[j] == 'W') {
                winCount++;
            }
            if(results[j] == 'L') {
                loseCount++;
            }

        }
        if(winCount>=loseCount) { //lower index player win or lose
            winners[winnerCount] = winners[i];
        }
        else {
            winners[winnerCount] = winners[i+1];
        }
        winnerCount++;
        winCount=0; //resetting counters
        loseCount=0;
        results[5] = {0};
        i++;
    }

    // winners[4]={0}; //reset winner array
    winnerCount = 0;


//ROUND 3 matches winners 1-2
    for(int j=0;j<5;j++) {
        results[j] = referee.refGame(winners[0],winners[1]);

//check number of wins & losses in terms of player with lower index
        if(results[j] == 'W') {
            winCount++;
        }
        if(results[j] == 'L') {
            loseCount++;
        }
    }
    if(winCount>=loseCount) { //lower index player win or lose
        return winners[0];
    }
    else {
        return winners[1];
    }
    return winners[0];
}


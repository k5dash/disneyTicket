# disneyTicket
This is a script runs on TamperMonkey to monitor is there any available ticket from Disney Park/Adventure Park in Los Angeles
1. go to https://disneyland.disney.go.com/admission/tickets/
2. fill in the ticket infomation, it will redirect you to https://disneyland.disney.go.com/admission/tickets/dates/
3. script should be automatically running

Note:
1. modifiy `the var dates = ['2021-07-01','2021-07-02','2021-07-03','2021-07-04','2021-07-05'];` to be whatever date you needed
2. modify `if (value.indexOf("Both Parks Available")>-1 || value.indexOf("Disneyland Park Available")>-1)` to the 3 options below
    "Both Parks Available", "Disneyland Park Available", "Disney California Adventure Park Available"

    

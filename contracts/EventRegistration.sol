//SPDX-License-Identifier: MIT
pragma solidity >= 0.5.0 < 0.9.0;

contract EventRegistration {

    enum TicketType { Regular, VIP }

    struct Attendee {
        string firstName;
        string lastName;
        string email;
        TicketType ticketType;
    }

    mapping(address => Attendee) attendees;

    //Register user information
    function register(
        string memory _firstName,
        string memory _lastName,
        string memory _email,
        TicketType _ticketType
        ) public {

            //Check that fields are filled out
            require(bytes(_firstName).length > 0, "First name is required");
            require(bytes(_lastName).length > 0, "Last name is required");
            require(bytes(_email).length > 0, "Email is required");

            //Create new Attendee
            Attendee memory newAttendee = Attendee({
                firstName: _firstName,
                lastName: _lastName,
                email: _email,
                ticketType: _ticketType
            }); 

        //Map sender address with Attendee information
        attendees[msg.sender] = newAttendee;
    }

    function getAttendeeInfo() public view returns(
        string memory firstName,
        string memory lastName,
        string memory email,
        string memory ticketType
    ) {
        Attendee storage currentAttendee = attendees[msg.sender];

        if(attendees[msg.sender].ticketType == TicketType.Regular) {
            return (
            currentAttendee.firstName,
            currentAttendee.lastName,
            currentAttendee.email,
            "Regular Ticket");
        } else {
            return(
            currentAttendee.firstName,
            currentAttendee.lastName,
            currentAttendee.email,
            "VIP Ticket");
        }
    }
}
const EventRegistration = artifacts.require("EventRegistration");

contract("EventRegistration", (accounts) => {
  it("register an attendee and return attendee info", async () => {
    const eventRegistrationInstance = await EventRegistration.deployed();
    const attendee = {
      firstName: "Ryan",
      lastName: "Gessay",
      email: "ryangessay99@gmail.com",
      ticketType: 1, // VIP ticket
    };

    // Register the attendee
    await eventRegistrationInstance.register(
      attendee.firstName,
      attendee.lastName,
      attendee.email,
      attendee.ticketType,
      { from: accounts[0] }
    );

    // Retrieve attendee info
    const attendeeInfo = await eventRegistrationInstance.getAttendeeInfo({
      from: accounts[0],
    });

    // Assert that the retrieved info matches the registered attendee
    assert.equal(attendeeInfo[0], attendee.firstName);
    assert.equal(attendeeInfo[1], attendee.lastName);
    assert.equal(attendeeInfo[2], attendee.email);
    assert.equal(attendeeInfo[3], "VIP Ticket");
  });
});

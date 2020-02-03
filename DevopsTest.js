/*global QUnit*/

sap.ui.define([
	"sap/ui/test/opaQunit"
], function(opaTest) {
	"use strict";

	QUnit.module("Module Name");

	opaTest("Should Test Description", function(Given, When, Then) {
		// Arrangements
		Given.iStartMyApp();
        return this.iStartMyAppInAFrame("../index.html");
		// Actions
		When.onMyPageUnderTest.iDoMyAction();

		// Assertions
		Then.onMyPageUnderTest.iDoMyAssertion();

		// Cleanup
		Then.iTeardownMyApp();
	});

});
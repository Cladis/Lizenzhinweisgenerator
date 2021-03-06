'use strict';

var $ = require( 'jquery' ),
	DialogueStep = require( './DialogueStep' ),
	LicenceStore = require( './LicenceStore' ),
	licences = new LicenceStore( require( './LICENCES' ) ),
	LicenceStepView = require( './views/LicenceStepView' );

var LicenceStep = function( licence ) {
	this._name = 'licence';
	if( licence.isInGroup( 'ported' ) ) {
		licence = licences.getLicence( licence.getUnportedVersionId() );
	}
	this._view = new LicenceStepView( licence, licences.findCompatibilities( licence.getId() ) );
};

$.extend( LicenceStep.prototype, DialogueStep.prototype );

module.exports = LicenceStep;

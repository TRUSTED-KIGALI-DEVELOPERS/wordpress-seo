import { inherits } from "util";

import IntroductionKeywordAssessment from "./../assessments/seo/IntroductionKeywordAssessment";
import KeyphraseLengthAssessment from "./../assessments/seo/KeyphraseLengthAssessment";
import KeywordDensityAssessment from "./../assessments/seo/KeywordDensityAssessment";
import MetaDescriptionKeywordAssessment from "./../assessments/seo/MetaDescriptionKeywordAssessment";
import TitleKeywordAssessment from "./../assessments/seo/TitleKeywordAssessment";
import UrlKeywordAssessment from "./../assessments/seo/UrlKeywordAssessment";
import Assessor from "./../assessor";
import MetaDescriptionLengthAssessment from "./../assessments/seo/MetaDescriptionLengthAssessment";
import TextLengthAssessment from "./../assessments/seo/TextLengthAssessment";
import PageTitleWidthAssessment from "./../assessments/seo/PageTitleWidthAssessment";
import FunctionWordsInKeyphrase from "./../assessments/seo/FunctionWordsInKeyphraseAssessment";
import SingleH1Assessment from "./../assessments/seo/SingleH1Assessment";
import { createAnchorOpeningTag } from "../../helpers/shortlinker";

/**
 * Returns the text length assessment to use.
 *
 * @returns {TextLengthAssessment} The text length assessment (with collection page configuration) to use.
 */
export const getTextLengthAssessment = function() {
	// Export so it can be used in tests.
	return new TextLengthAssessment( {
		recommendedMinimum: 250,
		slightlyBelowMinimum: 200,
		belowMinimum: 100,
		veryFarBelowMinimum: 50,
		urlTitle: createAnchorOpeningTag( "https://yoa.st/34j" ),
		urlCallToAction: createAnchorOpeningTag( "https://yoa.st/34k" ),
	} );
};

/**
 * Creates the Assessor used for collection pages.
 *
 * @param {object} i18n         The i18n object used for translations.
 * @param {object} researcher   The researcher used for the analysis.
 * @param {Object} options      The options for this assessor.
 * @constructor
 */
const CollectionSEOAssessor = function( i18n, researcher, options ) {
	Assessor.call( this, i18n, researcher, options );
	this.type = "CollectionSEOAssessor";

	this._assessments = [
		new IntroductionKeywordAssessment( {
			urlTitle: createAnchorOpeningTag( "https://yoa.st/shopify8" ),
			urlCallToAction: createAnchorOpeningTag( "https://yoa.st/shopify9" ),
		} ),
		new KeyphraseLengthAssessment(),
		new KeywordDensityAssessment(),
		new MetaDescriptionKeywordAssessment(),
		new MetaDescriptionLengthAssessment(),
		getTextLengthAssessment(),
		new TitleKeywordAssessment( {
			urlTitle: createAnchorOpeningTag( "https://yoa.st/shopify24" ),
			urlCallToAction: createAnchorOpeningTag( "https://yoa.st/shopify25" ),
		} ),
		new PageTitleWidthAssessment(),
		new UrlKeywordAssessment( {
			urlTitle: createAnchorOpeningTag( "https://yoa.st/shopify26" ),
			urlCallToAction: createAnchorOpeningTag( "https://yoa.st/shopify27" ),
		} ),
		new FunctionWordsInKeyphrase(),
		new SingleH1Assessment(),
	];
};

inherits( CollectionSEOAssessor, Assessor );

export default CollectionSEOAssessor;

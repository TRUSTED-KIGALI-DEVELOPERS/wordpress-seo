<?php

namespace Yoast\WP\SEO\Integrations\Third_Party;

use Yoast\WP\SEO\Conditionals\Third_Party\Elementor_Activated_Conditional;
use Yoast\WP\SEO\Integrations\Exclude_Post_Type;

/**
 * Exclude certain Elementor-specific post types from the indexable table.
 *
 * Posts with these post types will not be saved to the indexable table.
 *
 * @phpcs:disable Yoast.NamingConventions.ObjectNameDepth.MaxExceeded
 */
class Exclude_Elementor_Post_Types extends Exclude_Post_Type {

	/**
	 * This integration is only active when the Elementor plugin
	 * is installed and activated.
	 *
	 * @return array|string[] The conditionals.
	 */
	public static function get_conditionals() {
		return [ Elementor_Activated_Conditional::class ];
	}

	/**
	 * Returns the name of the post type to be excluded.
	 * To be used in the wpseo_indexable_excluded_post_types filter.
	 *
	 * @return string the name of the post type.
	 */
	public function get_post_type() {
		return 'elementor_library';
	}
}

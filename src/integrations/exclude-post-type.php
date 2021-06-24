<?php

namespace Yoast\WP\SEO\Integrations;

/**
 * Abstract class for excluding certain post types from being indexed.
 */
abstract class Exclude_Post_Type implements Integration_Interface {

	/**
	 * Initializes the integration.
	 */
	public function register_hooks() {
		\add_filter( 'wpseo_indexable_excluded_post_types', [ $this, 'exclude_post_types' ] );
	}

	/**
	 * Exclude the post type from the indexable table.
	 *
	 * @param array $excluded_post_types The excluded post types.
	 *
	 * @return array The excluded post types, including the specific post type.
	 */
	public function exclude_post_types( $excluded_post_types ) {
		$excluded_post_types[] = $this->get_post_type();

		return $excluded_post_types;
	}

	/**
	 * This integration is only active when the database migrations have been run.
	 *
	 * @return array|string[] The conditionals.
	 */
	abstract public static function get_conditionals();

	/**
	 * Returns the name of the post type to be excluded.
	 * To be used in the wpseo_indexable_excluded_post_types filter.
	 *
	 * @return string the name of the post type.
	 */
	abstract public function get_post_type();
}

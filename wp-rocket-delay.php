<?php

/**
 * Plugin Name: WP Rocket Delay JavaScript Issues
 * Plugin URI: https://github.com/alpipego/wp-rocket-delay
 * Description: This plugin was built to demonstrate inherent issues with WP Rocket's delaying JavaScript functionality.
 * Author: Alexander Goller
 * Author URI: https://alexandergoller.com/
 * Requires PHP: 7.4
 */

add_action('wp_enqueue_scripts', function() {
    wp_enqueue_script('wprd-provider', plugins_url('wprd-provider.js', __FILE__));
    wp_enqueue_script('wprd-consumer', plugins_url('wprd-consumer.js', __FILE__), ['wprd-provider'], null, true);
});

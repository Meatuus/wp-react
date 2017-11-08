<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the
 * installation. You don't have to use the web site, you can
 * copy this file to "wp-config.php" and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * MySQL settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://codex.wordpress.org/Editing_wp-config.php
 *
 * @package WordPress
 */

// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define('DB_NAME', 'wordpress-site');

/** MySQL database username */
define('DB_USER', 'tyler');

/** MySQL database password */
define('DB_PASSWORD', 'password');

/** MySQL hostname */
define('DB_HOST', 'localhost');

/** Database Charset to use in creating database tables. */
define('DB_CHARSET', 'utf8mb4');

/** The Database Collate type. Don't change this if in doubt. */
define('DB_COLLATE', '');

/**#@+
 * Authentication Unique Keys and Salts.
 *
 * Change these to different unique phrases!
 * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * You can change these at any point in time to invalidate all existing cookies. This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define('AUTH_KEY',         'jrR[{#>L}<(=@[?8H@r]]79fI|Gj$--])<eWWn?3oIi<W:/8*IaL*STUa8Dml*g&');
define('SECURE_AUTH_KEY',  '>&XJ3i[DImfNILuGwQZ~b,#Zs11WsB5fx&o~?)DWD ~=aN`c)=|njP-`_BQd%(_r');
define('LOGGED_IN_KEY',    ',m^~9hOoj#,L1~-_0qB^|d2FN|qZh<TG=y&CJLE~l5l=@!zta=MhZ?PSmxiO~B^)');
define('NONCE_KEY',        '):tD:QC9y[G5=Kr`m(rH[D|tP/pekEBmw@9&N>%>S GJ%DB!/pz(weW~MI;L`*Q2');
define('AUTH_SALT',        'jraZGs4#_MU!AZ3+`5|=dAEgG80r*=aLcX 4K=|A<&R/M&#fQ]esuT&_F:k7EE1!');
define('SECURE_AUTH_SALT', 'd]I=DWje</F:r,n<_a6NoBQbmuU_d7=cL] McU<VKSc%4Qf>%cqwr&1ES5NDzfQ^');
define('LOGGED_IN_SALT',   '=&11|>U>$$VUb=&bOm50q^<_YuXvw1RP/_nD*D<2JFESkhDPo?6~`8%GEZ6r}*V;');
define('NONCE_SALT',       '5..bBYz@SqvmM5Gj#R}?O^T5)T!8-KZm)#q(qUCej=?1{Im~)yxvb[[Q;wV+C0~Z');

/**#@-*/

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix  = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the Codex.
 *
 * @link https://codex.wordpress.org/Debugging_in_WordPress
 */
define('WP_DEBUG', false);

/* That's all, stop editing! Happy blogging. */

/** Absolute path to the WordPress directory. */
if ( !defined('ABSPATH') )
	define('ABSPATH', dirname(__FILE__) . '/');

/** Sets up WordPress vars and included files. */
require_once(ABSPATH . 'wp-settings.php');

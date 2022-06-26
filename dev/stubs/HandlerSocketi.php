<?php

if (!class_exists('HandlerSocketi')) {
	class HandlerSocketi
	{
		/**
		 * Possible values for $options['timeout' => 5, 'persistent' => false].
		 * Timeout in seconds.
		 *
		 * @param string $host
		 * @param int    $port
		 * @param array  $options
		 * @throws HandlerSocketi_Exception
		 */
		public function __construct($host, $port, array $options = [])
		{
		}

		/**
		 * Possible values for $options['id' => 0, 'index' => 'PRIMARY', 'filter' => ''].
		 *
		 * @param string $db
		 * @param string $table
		 * @param array  $fields
		 * @param array  $options
		 * @return HandlerSocketi_Index
		 */
		public function open_index($db, $table, array $fields, array $options)
		{
		}

		/**
		 * Possible values for $options['id' => 0, 'index' => 'PRIMARY', 'filter' => ''].
		 *
		 * @param string $db
		 * @param string $table
		 * @param array  $fields
		 * @param array  $options
		 * @return HandlerSocketi_Index
		 */
		public function openIndex($db, $table, array $fields, array $options)
		{
		}
	}
}

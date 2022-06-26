<?php

if (!class_exists('HandlerSocketi_Index')) {
	class HandlerSocketi_Index
	{
		/**
		 * Possible values for $options['id' => 0, 'index' => 'PRIMARY', 'filter' => null].
		 *
		 * @param HandlerSocketi $hs
		 * @param string         $db
		 * @param string         $table
		 * @param array          $fields
		 * @param array          $options
		 * @throws HandlerSocketi_Exception
		 */
		public function __construct(HandlerSocketi $hs, $db, $table, array $fields, array $options)
		{
		}

		/**
		 * Possible values for $options['limit' => 1, 'offset' => 0'].
		 * Default limit: 1.
		 *
		 * @param array $query
		 * @param array $options
		 * @return array|bool
		 * @throws HandlerSocketi_Exception
		 */
		public function find(array $query, array $options = [])
		{
		}

		/**
		 * @throws HandlerSocketi_Exception
		 */
		public function insert()
		{
		}

		/**
		 * Possible values for $options['limit' => 1, 'offset' => 0'].
		 * Default limit: 1.
		 *
		 * @param array $query
		 * @param array $update
		 * @param array $options
		 * @return bool
		 * @throws HandlerSocketi_Exception
		 */
		public function update(array $query, array $update, array $options)
		{
		}

		/**
		 * Possible values for $options['limit' => 1, 'offset' => 0'].
		 * Default limit: 1.
		 *
		 * @param array $query
		 * @param array $options
		 * @return bool
		 * @throws HandlerSocketi_Exception
		 */
		public function remove(array $query, array $options)
		{
		}

		/**
		 * Looks like $args could be an array like this:
		 * [
		 *      // name, query, options
		 *      ['find', [], [] ],
		 *      // name, data
		 *      ['insert', [] ],
		 *      // name, query, options
		 *      ['remove', [], [] ],
		 *      // name, query, update, options
		 *      ['update', [], [], [] ],
		 * ]
		 *
		 * @param array $args
		 * @return array
		 * @throws HandlerSocketi_Exception
		 */
		public function multi(array $args)
		{
		}

		/**
		 * @return string|null
		 */
		public function get_error()
		{
		}

		/**
		 * @return int
		 */
		public function get_id()
		{
		}

		/**
		 * @return string
		 */
		public function get_name()
		{
		}

		/**
		 * @return string
		 */
		public function get_db()
		{
		}

		/**
		 * @return string
		 */
		public function get_table()
		{
		}

		/**
		 * @return string|array
		 */
		public function get_field()
		{
		}

		/**
		 * @return string|null
		 */
		public function get_filter()
		{
		}

		/**
		 * @return array ['query' => '', 'modify' => '']
		 */
		public function get_operator()
		{
		}

		/**
		 * @return string|null
		 */
		public function getError()
		{
		}

		/**
		 * @return int
		 */
		public function getId()
		{
		}

		/**
		 * @return string
		 */
		public function getName()
		{
		}

		/**
		 * @return string
		 */
		public function getDb()
		{
		}

		/**
		 * @return string
		 */
		public function getTable()
		{
		}

		/**
		 * @return string|array
		 */
		public function getField()
		{
		}

		/**
		 * @return string|null
		 */
		public function getFilter()
		{
		}

		/**
		 * @return array ['query' => '', 'modify' => '']
		 */
		public function getOperator()
		{
		}
	}
}

import { beforeEach, describe, it } from 'node:test'; // eslint-disable-line n/no-unsupported-features/node-builtins
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';

import stylelint from 'stylelint';

import config from '../index.js';

const validScss = readFileSync('./__tests__/valid.scss', 'utf-8');
const invalidScss = readFileSync('./__tests__/invalid.scss', 'utf-8');

describe('flags no warnings with valid scss', () => {
	let result;

	beforeEach(async () => {
		result = await stylelint.lint({
			code: validScss,
			config,
		});
	});

	it('did not error', () => {
		assert.equal(result.errored, false);
	});

	it('flags no warnings', () => {
		assert.equal(result.results[0].warnings.length, 0);
	});
});

describe('flags warnings with invalid scss', () => {
	let result;

	beforeEach(async () => {
		result = await stylelint.lint({
			code: invalidScss,
			config,
		});
	});

	it('did error', () => {
		assert.equal(result.errored, true);
	});

	it('flags four warnings', () => {
		assert.equal(result.results[0].warnings.length, 4);
	});

	it('correct warning text (function name)', () => {
		assert.equal(
			result.results[0].warnings[0].text,
			'Expected function name "FOO" to be kebab-case (scss/at-function-pattern)',
		);
	});

	it('correct rule flagged (function name)', () => {
		assert.equal(result.results[0].warnings[0].rule, 'scss/at-function-pattern');
	});

	it('correct severity flagged (function name)', () => {
		assert.equal(result.results[0].warnings[0].severity, 'error');
	});

	it('correct line number (function name)', () => {
		assert.equal(result.results[0].warnings[0].line, 7);
	});

	it('correct column number (function name)', () => {
		assert.equal(result.results[0].warnings[0].column, 11);
	});

	it('correct warning text (mixin name)', () => {
		assert.equal(
			result.results[0].warnings[1].text,
			'Expected mixin name "FOO" to be kebab-case (scss/at-mixin-pattern)',
		);
	});

	it('correct rule flagged (mixin name)', () => {
		assert.equal(result.results[0].warnings[1].rule, 'scss/at-mixin-pattern');
	});

	it('correct severity flagged (mixin name)', () => {
		assert.equal(result.results[0].warnings[1].severity, 'error');
	});

	it('correct line number (mixin name)', () => {
		assert.equal(result.results[0].warnings[1].line, 11);
	});

	it('correct column number (mixin name)', () => {
		assert.equal(result.results[0].warnings[1].column, 8);
	});

	it('correct warning text (variable name)', () => {
		assert.equal(
			result.results[0].warnings[2].text,
			'Expected variable name "FOO" to be kebab-case (scss/dollar-variable-pattern)',
		);
	});

	it('correct rule flagged (variable name)', () => {
		assert.equal(result.results[0].warnings[2].rule, 'scss/dollar-variable-pattern');
	});

	it('correct severity flagged (variable name)', () => {
		assert.equal(result.results[0].warnings[2].severity, 'error');
	});

	it('correct line number (variable name)', () => {
		assert.equal(result.results[0].warnings[2].line, 1);
	});

	it('correct column number (variable name)', () => {
		assert.equal(result.results[0].warnings[2].column, 1);
	});

	it('correct warning text (placeholder name)', () => {
		assert.equal(
			result.results[0].warnings[3].text,
			'Expected placeholder name "FOO" to be kebab-case (scss/percent-placeholder-pattern)',
		);
	});

	it('correct rule flagged (placeholder name)', () => {
		assert.equal(result.results[0].warnings[3].rule, 'scss/percent-placeholder-pattern');
	});

	it('correct severity flagged (placeholder name)', () => {
		assert.equal(result.results[0].warnings[3].severity, 'error');
	});

	it('correct line number (placeholder name)', () => {
		assert.equal(result.results[0].warnings[3].line, 3);
	});

	it('correct column number (placeholder name)', () => {
		assert.equal(result.results[0].warnings[3].column, 1);
	});
});

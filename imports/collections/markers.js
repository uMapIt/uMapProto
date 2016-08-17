import { Mongo } from 'meteor/mongo';
import { check, Match } from 'meteor/check';

// TODO: add meteor methods here

export const Markers = new Mongo.Collection('markers');

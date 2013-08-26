/* -*- Mode: js; js-indent-level: 2; indent-tabs-mode: nil; tab-width: 2 -*- */
/* vim: set shiftwidth=2 tabstop=2 autoindent cindent expandtab: */
/*
 * Copyright 2013 Mozilla Foundation
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/*global initDefaultListeners */
var AS2MovieClipDefinition = (function () {
  var def = {
    __class__: 'avm1lib.AS2MovieClip',

    initialize: function () {
    },

    _insertChildAtDepth: function _insertChildAtDepth(mc, depth) {
      return this.$nativeObject._insertChildAtDepth(mc, depth);
    },
    _duplicate: function _duplicate(name, depth, initObject) {
      return this.$nativeObject._duplicate(name, depth, initObject);
    },
    _constructSymbol: function constructSymbol(symbolId, name) {
      notImplemented("AS2MovieClip._constructSymbol");
    }
  };

  var desc = Object.getOwnPropertyDescriptor;

  def.__glue__ = {
    native: {
      instance: {
        $nativeObject: {
          get: function () {
            return this.$nativeObject;
          }
        },
        init: function init(nativeMovieClip) {
          Object.defineProperty(this, '$nativeObject', { value: nativeMovieClip });
          nativeMovieClip.$as2Object = this;
          initDefaultListeners(this);
        },
        _insertChildAtDepth: def._insertChildAtDepth,
        _duplicate: def._duplicate,
        _constructSymbol: def._constructSymbol,
      }
    },
    script: {
      instance: Glue.ALL
    }
  };

  return def;
}).call(this);

var WithHistory = function() {

  this.init = function() {
    if (this.supportsHistoryPushState()) {
      $(window).bind('popstate', $.proxy(this, 'onPopState'));
    } else {
      this.hashCheckInterval = setInterval($.proxy(this, 'onCheckHash'), 200);
    }
  },

  this.pushState = function(url) {
    if (this.supportsHistoryPushState()) {
      window.history.pushState('', '', url);
    } else {
      this.previousHash = '#' + url;
      document.location.hash = url;
    }
    this.urlDidChange();
  },

  this.supportsHistoryPushState = function() {
    return ('pushState' in window.history) &&
           window.history['pushState'] !== null;
  },

  this.onCheckHash = function() {
    if (document.location.hash != this.previousHash) {
      this.previousHash = document.location.hash;
      this.urlDidChange();
    }
  },

  this.onPopState = function() {
    this.receivedPopState = true;
    this.urlDidChange();
  },

  this.urlDidChange = function(path) {
    $(document).trigger('WithHistory.urlDidChange');
  },

  this.url = function() {
    if (this.supportsHistoryPushState()) {
      return document.location.pathname;
    } else {
      return document.location.hash.slice(1);
    }
  }

  this.init();

}
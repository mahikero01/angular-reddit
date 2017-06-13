"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Article = (function () {
    function Article(title, link, votes) {
        this.title = title;
        this.link = link;
        this.votes = votes || 0;
    }
    Article.prototype.voteUp = function () {
        this.votes += 1;
    };
    Article.prototype.voteDown = function () {
        this.votes -= 1;
    };
    Article.prototype.domain = function () {
        try {
            var domainAndPath = this.link.split('//')[1];
            return domainAndPath.split('/')[0];
        }
        catch (err) {
            return null;
        }
    };
    return Article;
}());
exports.Article = Article;

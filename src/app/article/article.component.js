"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var article_model_1 = require("./article.model");
var ArticleComponent = (function () {
    function ArticleComponent() {
        this.cssClass = 'row';
    }
    ArticleComponent.prototype.voteUp = function () {
        this.article.voteUp();
        return false;
    };
    ArticleComponent.prototype.voteDown = function () {
        this.article.voteDown();
        return false;
    };
    ArticleComponent.prototype.ngOnInit = function () {
    };
    return ArticleComponent;
}());
__decorate([
    core_1.HostBinding('attr.class'),
    __metadata("design:type", Object)
], ArticleComponent.prototype, "cssClass", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", article_model_1.Article)
], ArticleComponent.prototype, "article", void 0);
ArticleComponent = __decorate([
    core_1.Component({
        selector: 'app-article',
        templateUrl: './article.component.html',
        styleUrls: ['./article.component.css']
    }),
    __metadata("design:paramtypes", [])
], ArticleComponent);
exports.ArticleComponent = ArticleComponent;

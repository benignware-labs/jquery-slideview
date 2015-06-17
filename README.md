# jquery-slideview
> JQuery Slider Component

## Usage

```js
$(".slideview").slideview({
  nextButton: '.slideview-next',
  prevButton: '.slideview-prev',
  pagination: '.slideview-pagination'
});
```

```html
<div class="slideview">
  <div class="slideview-content">
    <div class="slide">
      Slide 1
    </div>
    <div class="slide">
      Slide 2
    </div>
    <div class="slide">
      Slide 3
  </div>
  <a class="slideview-button slideview-prev" aria-label="Previous"></a>
  <a class="slideview-button slideview-next" aria-label="Next"></a>
  <div class="slideview-pagination"></div>
</div>
```



## Options


<table>
  <thead>
    <tr>
      <th>Name</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>buttonDisabledClass</td>
      <td>CSS Class to add to a disabled next- or previous-button</td>
    </tr>
    <tr>
      <td>contentSelector</td>
      <td>Scroll container selector. Defaults to `> .slideview-content`</td>
    </tr>
    <tr>
      <td>scrollStyle</td>
      <td>Specify which style to use for scroll motion. Can be one of `position` or `transform`.* 
      </td>
    </tr>
    <tr>
      <td>pagination</td>
      <td>Pagination container selector or markup</td>
    </tr>
    <tr>
      <td>paginationActiveClass</td>
      <td>CSS Class to add to the currently active pagination item</td>
    </tr>
    <tr>
      <td>paginationItem</td>
      <td>A function to provide markup of pagination items. Defaults to `function(index) {
        return $('&lt;a class="slideview-pagination-item"&gt; &lt;/a&gt;');
      }`</td>
    </tr>
    
    <tr>
      <td>nextButton</td>
      <td>Next Button selector or markup</td>
    </tr>
    <tr>
      <td>prevButton</td>
      <td>Previous Button selector or markup</td>
    </tr>
  </tbody>
</table>

> In order to get support for css-transitions and -transforms, you need to include [jquery.fx-transition](https://github.com/benignware/jquery.fx-transition.git) and [jquery.fx-transform](https://github.com/benignware/jquery.fx-transform.git)
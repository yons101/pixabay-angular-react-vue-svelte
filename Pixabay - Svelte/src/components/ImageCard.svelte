<script>
  export let image;
</script>

<style>
  .card-img-top {
    height: 20vw;
    object-fit: cover;
  }

  .badge {
    font-size: 0.8rem;
  }

  a:hover {
    text-decoration: none;
  }

  @media (max-width: 576px) {
    .card-img-top {
      height: 50vw;
    }
  }
</style>

<div class="col-sm-6 col-lg-4 mb-4 ">
  <a href={image.pageURL} target="_blank" class="">
    <div class="card text-center ">
      <img class="card-img-top" src={image.webformatURL} alt="" />
      <div class="card-body p-2">
        <span class="badge badge-dark">
          <i class="fas fa-eye" />
          {image.views}
        </span>
        <span class="badge badge-danger">
          <i class="fas fa-heart" />
          {image.likes}
        </span>
        <span class="badge badge-primary">
          <i class="fas fa-arrow-down" />
          {image.downloads}
        </span>
      </div>
    </div>
  </a>
</div>

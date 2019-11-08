IMAGE := diegotony/orden-micro:k8s-alpine

test:
	true

image:
	docker build -t $(IMAGE) .  --no-cache 

push-image:
	docker push $(IMAGE)


.PHONY: image push-image test

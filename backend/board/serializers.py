from rest_framework import serializers
from board.models import PostVO as post


class PostSerializer(serializers.Serializer):
    id = serializers.IntegerField(read_only=True)
    # pk인 id는 99% 확률로 수정하지 않을 것이므로 read_only
    title = serializers.CharField()
    content = serializers.CharField()

    class Meta:
        model = post
        fields = ['title', 'content']

    def create(self, validated_data):
        """
        Create and return a new `Snippet` instance, given the validated data.
        """
        return post.objects.create(**validated_data)

    def update(self, instance, validated_data):
        """
        Update and return an existing `Snippet` instance, given the validated data.
        """
        instance.title = validated_data.get('title', instance.title)
        instance.content = validated_data.get('content', instance.content)
        instance.save()
        return instance
